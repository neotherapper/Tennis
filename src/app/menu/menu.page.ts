import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../core/services/screensize.service';
import { SiteLinkService, SiteLink } from '../core/services/site-links.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;
  pages: SiteLink[];
  activePath: string;

  constructor(
    private screensizeService: ScreensizeService,
    private siteLinks: SiteLinkService,
    private router: Router,
  ) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
      this.isLoggedIn = false;
    });
  }

  ngOnInit() {
    this.pages = this.siteLinks.getSiteLinks();
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((ev: NavigationEnd) => {
      this.activePath = ev.url;
    });
  }
}

