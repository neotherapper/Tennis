import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserOptionsComponent } from './components/user-options/user-options.component';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';


const components = [HeaderComponent, LoginComponent, NavbarMenuComponent, UserOptionsComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [components],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
