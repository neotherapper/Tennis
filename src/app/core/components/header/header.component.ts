import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean;
  isLoggedIn: boolean;

  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
      this.isLoggedIn = false;
    });
  }

  ngOnInit() {}
}
