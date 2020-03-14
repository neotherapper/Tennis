import { Injectable } from '@angular/core';

export interface SiteLinks {
  name: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SiteLinkService {
  private pages: SiteLinks[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Tournaments',
      path: '/tournaments',
    },
  ];
  constructor() {}

  getSiteLinks(): SiteLinks[]{
    return this.pages;
  }
}
