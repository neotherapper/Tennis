import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY } from './auth.service';

export interface AuthSambaUserI {
  email: string;
  password: string;
}

interface SambaAuthSession {
  id: number;
  user_id: number;
  active: number;
  api_token: string;
}

interface SambaAuthDAO {
  data: {
    id: number;
    username: string;
    email: string;
    sessions: SambaAuthSession[]
  };
}

@Injectable({ providedIn: 'root' })
export class AuthSambaService {
  authSambaUrl = 'https://api.samba.gr/auth/';
  private authSambaHeader = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    k: 'K2Vz8ppklBYb1j53TG730Tv0TSfu3f3H',
  });

  constructor(private httpClient: HttpClient, private storage: Storage,) {}

  async login(user: AuthSambaUserI): Promise<string> {
    const body = new URLSearchParams();
    body.set('email', user.email);
    body.set('password', user.password);
    const authLoginUrl = `${this.authSambaUrl}login`;
    try {
      const login = (await this.httpClient
        .post(authLoginUrl, body.toString(), {
          headers: this.authSambaHeader,
        })
        .toPromise()) as SambaAuthDAO;
      return login.data.sessions[0].api_token;
    } catch (error) {
      console.log('Error ', error);
      return error.ok;
    }
  }

  async logout(): Promise<boolean> {
     const authLogOutUrl = `${this.authSambaUrl}logout`;
     const apiToken = await this.storage.get(TOKEN_KEY);
     this.authSambaHeader.append('Api-Token', apiToken);
     try {
       const logout = (await this.httpClient
         .post(authLogOutUrl, {}, {
           headers: this.authSambaHeader,
         })
         .toPromise()) as boolean;
       return logout;
     } catch (error) {
       console.log('Error ', error);
       return error.ok;
     }
  }
}
