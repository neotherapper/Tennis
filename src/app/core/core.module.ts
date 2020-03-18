import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserOptionsComponent } from './components/user-options/user-options.component';


const components = [HeaderComponent, LoginComponent, NavbarMenuComponent, UserOptionsComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [components],
  providers: []
})
export class CoreModule {}
