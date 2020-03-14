import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const components = [HeaderComponent, LoginComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [components],
})
export class CoreModule {}
