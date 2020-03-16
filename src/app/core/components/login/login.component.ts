import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onLoginButtonClicked(source: string): void {
    this.modalController.dismiss(source);
  }
}
