import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;

  constructor(private screensizeService: ScreensizeService, private modalController: ModalController) {
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
}
