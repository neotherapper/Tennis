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

  async updateUserProfile(profile: ProfileI): Promise<any> {
    const uri = encodeURI(
      `${environment.apiUrl}/account/${profile.id}/profile`
    );
    const profilePost = new URLSearchParams(
      JSON.parse(JSON.stringify(profile))
    );
    try {
      const updatedUserProfile = (
        await this.http.put(uri, profilePost.toString(), {
          observe: 'response',
          responseType: 'json',
        })
      ).toPromise();
      return updatedUserProfile;
    } catch (error) {
      console.log('Update User Profile Error ', error);
      return '';
    }
  }
}
