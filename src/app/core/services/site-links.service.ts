import { Injectable } from '@angular/core';

export interface SiteLink {
  name: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SiteLinkService {
  private pages: SiteLink[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Tournaments',
      path: '/tournaments',
    },
    {
      name: 'User Settings',
      path: '/settings/profile',
    },
    {
      name: 'Federer',
      path: '/19',
    },
  ];
  constructor() {}

  getSiteLinks(): SiteLink[] {
    return this.pages;
  }
}
