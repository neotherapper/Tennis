import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { Facebook } from '@ionic-native/facebook/ngx';


const components = [HeaderComponent, LoginComponent, NavbarMenuComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [components],
  providers: [
    Facebook
  ]
})
export class CoreModule {}
