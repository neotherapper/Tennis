import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ProfileI } from './profile.model';

interface ProfileDAO {
  data: ProfileI;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserProfileById(userId: string): Observable<ProfileI> {
    const uri = encodeURI(`${environment.apiUrl}/account/${userId}/profile`);
    const user = this.http
      .get<ProfileDAO>(uri, { responseType: 'json' })
      .pipe(
        map(resp => resp.data),
        catchError(err => {
          return throwError(err);
        })
      );

    return user;
  }
}