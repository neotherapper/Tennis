import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteLink } from '../../services/site-links.service';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;

  constructor(
    private screensizeService: ScreensizeService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private router: Router,
    private route: ActivatedRoute,
    private facebook: Facebook
  ) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
      this.isLoggedIn = false;
    });
  }

  ngOnInit() {}

  async login(): Promise<void> {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'login-modal',
    });
    await modal.present();

    const data = (await modal.onDidDismiss()).data as string;

    if (data === 'facebook') {
      console.log('%clogging in with facebook', 'color:red', data);
      const permissions = ['email', 'public_profile'];
      const facebookLoginResonse = await this.facebook.login(permissions);
      const facebookAuthData = {
        id: facebookLoginResonse.authResponse.userID,
        access_token: facebookLoginResonse.authResponse.accessToken,
      };

      const facebookApiResponse = await getUserFacebookDetails();

      async function getUserFacebookDetails(): Promise<any> {
        return await this.facebook.api(
          'me?fields=id,name,email,first)name,picture.width(720).height(720).as(picture_large',
          []
        );
      }

      console.log(facebookLoginResonse, facebookApiResponse);
    }
  }

  async showMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: NavbarMenuComponent,
      event: ev,
      translucent: true,
      showBackdrop: false,
    });
    await popover.present();
    const data = (await popover.onDidDismiss()).data as SiteLink;
    if (data && data.path) {
      this.router.navigate([data.path], { relativeTo: this.route });
    }
  }
}
