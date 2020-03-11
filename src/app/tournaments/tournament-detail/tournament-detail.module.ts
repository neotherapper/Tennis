import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentDetailPageRoutingModule } from './tournament-detail-routing.module';

import { TournamentDetailPage } from './tournament-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentDetailPageRoutingModule
  ],
  declarations: [TournamentDetailPage]
})
export class TournamentDetailPageModule {}
