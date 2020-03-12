import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


const components = [
  LayoutComponent
]

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [components],
})
export class CoreModule {}
