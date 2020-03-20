import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { AuthGuardService } from '../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'tournaments',
        loadChildren: () =>
          import('../tournaments/tournaments.module').then(
            m => m.TournamentsPageModule
          ),
      },
      {
        path: 'settings/profile',
        loadChildren: () =>
          import('../settings/profile/profile.module').then(
            m => m.ProfilePageModule
          ),
        canActivate: [AuthGuardService]
      },
      {
        path: '',
        loadChildren: () =>
          import('../user/user.module').then(m => m.UserPageModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
