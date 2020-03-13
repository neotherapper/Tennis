import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


const components = [HeaderComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [components],
})
export class CoreModule {}
