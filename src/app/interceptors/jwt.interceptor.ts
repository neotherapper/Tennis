import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY } from '../core/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.storage.get(TOKEN_KEY))
    .pipe(
      switchMap(accessToken => {
        if (this.isApiSafe(request.url)) {

          let authSambaHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            k: 'K2Vz8ppklBYb1j53TG730Tv0TSfu3f3H',
          });

          if (accessToken) {
            authSambaHeaders = authSambaHeaders.set('Api-Token', accessToken);
          }

          const authReq = request.clone({
            headers: authSambaHeaders,
          });

          console.log('Intercepted HTTP call', authReq);
          return next.handle(authReq);
        }
      })
    );
  }

  private getListOfSafeApis() {
    return [
      `${environment.apiUrl}/profiles/`,
      `${environment.apiUrl}/account/`,
      `${environment.apiUrl}/auth/`,
    ];
  }

  private isApiSafe(url: string): boolean {
    const listOfSafeApis = this.getListOfSafeApis();
    const apiIndex = listOfSafeApis.findIndex((api) => {
      return url.includes(api);
    });
    return (apiIndex === -1) ? false : true;
  }
}
