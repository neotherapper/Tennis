import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<UserI> {
    const uri = encodeURI(`${environment.apiUrl}/profiles/${userId}`);
    return this.http.get<UserI>(uri);
  }
}
