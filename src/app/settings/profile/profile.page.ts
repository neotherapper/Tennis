import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  editProfile: FormGroup;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // TODO: add minLength Validators for fname and lname
    this.editProfile = new FormGroup({
      fname: new FormControl(null, [
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      lname: new FormControl(null, [
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl('male', Validators.required),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  processForm() {
    console.log('%cprocessForm', 'color:red', this.editProfile.value);
  }

  onProfileImageChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log('%creader.result', 'color:red', reader.result);
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
