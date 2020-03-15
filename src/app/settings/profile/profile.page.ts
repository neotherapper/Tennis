import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  editProfile: FormGroup;

  constructor() {}

  ngOnInit() {
    this.editProfile = new FormGroup({
      firstName: new FormControl(null, [
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
    });
  }

  processForm() {
    console.log('%cprocessForm', 'color:red', this.editProfile.value);
  }
}
