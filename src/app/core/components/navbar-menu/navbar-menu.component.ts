import { Component, OnInit } from '@angular/core';
import { SiteLinkService, SiteLink } from '../../services/site-links.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  pages: SiteLink[];

  constructor(private popoverController: PopoverController, private siteLinks: SiteLinkService) {}

  ngOnInit() {
    this.pages = this.siteLinks.getSiteLinks();
  }

  onPopOverItemClicked(page: SiteLink) {
    this.popoverController.dismiss(page);
  }
}
