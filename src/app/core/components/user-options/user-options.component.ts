import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

export enum UserOptions {
  logout,
  settings,
}

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss'],
})
export class UserOptionsComponent implements OnInit {
  options = [
    {
      label: 'Profile Settings',
      value: 'settings',
    },
    {
      label: 'Logout',
      value: 'logout',
    },
  ];

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  onPopOverItemClicked(option: UserOptions) {
    this.popoverController.dismiss(option);
  }
}

