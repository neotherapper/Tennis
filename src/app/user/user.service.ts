import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserI } from './user.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserI> {
    const uri = encodeURI(`${environment.apiUrl}/profiles/${userId}`);
    const user = this.http
      .get<UserI>(uri, { responseType: 'json' })
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );

    return user;
  }
}
