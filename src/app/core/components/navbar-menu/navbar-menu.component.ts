import { Component, OnInit } from '@angular/core';
import { SiteLinkService, SiteLinks } from '../../services/site-links.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  pages: SiteLinks[];

  constructor(private siteLinks: SiteLinkService) {}

  ngOnInit() {
    this.pages = this.siteLinks.getSiteLinks();
  }
}
