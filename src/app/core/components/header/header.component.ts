import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteLink } from '../../services/site-links.service';
import { AuthService } from '../../services/auth.service';
import { AuthSambaUserI } from '../../services/auth-samba.service';

interface ModalI {
  source?: string;
  user?: AuthSambaUserI;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;

  constructor(
    private auth: AuthService,
    private screensizeService: ScreensizeService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
    });

    this.auth.authenticationState.subscribe((state) => {
      state ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
    });
  }

  ngOnInit() {}

  async login(): Promise<void> {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'login-modal',
    });
    await modal.present();

    const data = (await modal.onDidDismiss()).data as ModalI;

    if (data.hasOwnProperty('source') && data.source === 'facebook') {
      console.log('logging in with facebook', data);
      this.auth.signInWithFacebook();
    } else if (data.hasOwnProperty('user')) {
      this.auth.login(data.user);
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
