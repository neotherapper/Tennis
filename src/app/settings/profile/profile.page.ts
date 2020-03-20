import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileI } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  editProfile: FormGroup;
  profile: ProfileI;

  constructor(private cd: ChangeDetectorRef, private profileService: ProfileService) {}

  async ngOnInit() {
    this.profile = await this.profileService
      .getUserProfileById('19')
      .toPromise();
    // TODO: add minLength Validators for fname and lname
    this.editProfile = new FormGroup({
      fname: new FormControl(this.profile.fname, [
        Validators.maxLength(30),
        Validators.pattern('[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώ ]*'),
        Validators.required,
      ]),
      lname: new FormControl(this.profile.lname, [
        Validators.maxLength(30),
        Validators.pattern('[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώ ]*'),
        Validators.required,
      ]),
      birthday: new FormControl(this.profile.birthday, Validators.required),
      gender: new FormControl(this.profile.gender, Validators.required),
      // TODO: mobile should be 10?
      mobile: new FormControl(this.profile.mobile, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
      ]),
    });
  }

  processForm() {
    console.log('%cprocessForm', 'color:red', this.editProfile);
  }

  // TODO: handle mobile native version of uploading profile image
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
