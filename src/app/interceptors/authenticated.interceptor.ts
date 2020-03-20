import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from '../core/services/error.service';
import { NotificationService } from '../core/services/notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticatedInterceptor implements HttpInterceptor {
  constructor(
    private errorService: ErrorService,
    private notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isSimplePage =
      request.url.endsWith('account') ||
      request.url.endsWith('login') ||
      request.url.endsWith('resetPassword');

    let parsedMessage: string;

    return next.handle(request).pipe(
      tap(
        /*onNext*/ (response: HttpResponse<string>) => {
          if (
            response.body &&
            typeof response.body === 'string' &&
            (response.body.search('Exception') >= 0 ||
              response.body.startsWith('event'))
          ) {
            parsedMessage = response.body.match(/[^:\s][^:]*$/)[0];
            // the right-most part of the string that has no colon characters, since errors are usually
            // formatted like "event:java.lang.....ThingException: there was an error"
            this.errorService.handleError(parsedMessage);
          }
        },
        err => {
          // console.log(err);
          if (request.url.endsWith('login')) {
            parsedMessage = 'Invalid username or password';
          } else {
            // const message = JSON.parse(err.error).message || err.message;
            const message = err.error.message;
            parsedMessage = message;
          }
          this.errorService.handleError(parsedMessage);
        },
        /*onComplete*/ () => {
          if (request.url.endsWith('resetPassword')) {
            this.notificationService.success('Success', '');
          }
        }
      )
    );
  }
}
