import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('user17@test.gr', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('user17', [
        Validators.maxLength(30),
        Validators.required,
      ]),
    });
  }

  closeModal(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onLoginButtonClicked(src: string): void {
    this.modalController.dismiss({
      source: src
    });
  }

  login(): void {
    const loginData = this.loginForm.value;
    this.modalController.dismiss({
      user: {
        email: loginData.email,
        password: loginData.password,
      }
    });
  }
}
