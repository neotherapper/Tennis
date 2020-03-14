import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentListViewComponent } from './tournament-list-view/tournament-list-view.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

const components = [
  TournamentListViewComponent
]

@NgModule({
  declarations: components,
  imports: [CommonModule, IonicModule, RouterModule],
  exports: components
})
export class ComponentsModule {}
