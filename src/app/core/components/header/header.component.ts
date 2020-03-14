import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';

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
    private popoverController: PopoverController
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
    return await modal.present();
  }

  async showMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: NavbarMenuComponent,
      event: ev,
      translucent: true,
    });

    await popover.present();
  }
}
