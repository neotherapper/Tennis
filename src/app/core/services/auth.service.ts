import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AuthSambaService, AuthSambaUserI } from './auth-samba.service';

export const TOKEN_KEY = 'samba-access-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private plt: Platform,
    private authSamba: AuthSambaService
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  async login(user: AuthSambaUserI): Promise<void> {
    const authSambaToken = await this.authSamba.login(user);
    if (!authSambaToken) {
      return;
    }

    try {
      await this.storage.set(TOKEN_KEY, authSambaToken);
      this.authenticationState.next(true);
    } catch (error) {
      console.error(error, 'failed to save user token');
    }
  }

  async logout(): Promise<void> {
    try {
      await this.storage.remove(TOKEN_KEY);
      this.authenticationState.next(false);
    } catch (error) {
      console.error(error, 'failed to delete user token');
    }
  }

  isAuthenticated(): boolean {
    return this.authenticationState.value;
  }

  async checkToken(): Promise<void> {
    const token = await this.storage.get(TOKEN_KEY);
    if (token) {
      this.authenticationState.next(true);
    }
  }

  async getCurrentState(): Promise<boolean> {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();

    try {
      return result && result.accessToken;
    } catch (e) {
      return false;
    }
  }

  async signInWithFacebook(): Promise<void> {
    const FACEBOOK_PERMISSIONS = [
      'email',
      'user_birthday',
      'user_photos',
      'user_gender',
    ];

    const result = await Plugins.FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });
    if (result && result.accessToken) {
      this.navCtrl.navigateRoot(['/']);
    }
  }

  async signOut(): Promise<void> {
    await Plugins.FacebookLogin.logout();
    this.navCtrl.navigateRoot(['/auth']);
  }
}
