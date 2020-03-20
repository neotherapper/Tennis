import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ErrorService } from '../core/services/error.service';
import { NotificationService } from '../core/services/notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
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
        (err: HttpErrorResponse) => {

          if (err.error instanceof Error || err.error.message) {
            const message = err.error.message;
            this.errorService.handleError(message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${err.status}, body was: ${err.error}`
            );
          }

          // ...optionally return a default fallback value so app can continue (pick one)
          // which could be a default value (which has to be a HttpResponse here)
          // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
          // or simply an empty observable
          return of<HttpEvent<any>>();
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
