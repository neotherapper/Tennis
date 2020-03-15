import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsPage } from './tournaments.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentsPage
  },
  {
    path: ':tournamentId',
    loadChildren: () => import('./tournament-detail/tournament-detail.module').then( m => m.TournamentDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsPageRoutingModule {}
