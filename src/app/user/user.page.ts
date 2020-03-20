import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserI } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  loadedUser: UserI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('userId')) {
        this.router.navigate(['./tournaments']);
        return;
      }

      const userId = paramMap.get('userId');
      this.loadedUser = await this.userService.getUserById(userId).toPromise();
    });
  }
}
