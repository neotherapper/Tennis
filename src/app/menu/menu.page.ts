import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../core/services/screensize.service';
import { SiteLinkService } from '../core/services/site-links.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;

  activePath = '';

  pages = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Tournaments',
      path: '/tournaments',
    },
  ];

  constructor(
    private screensizeService: ScreensizeService,
    private siteLinks: SiteLinkService
  ) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
      this.isLoggedIn = false;
    });
  }

  ngOnInit() {
    this.pages = this.siteLinks.getSiteLinks();
  }
}

