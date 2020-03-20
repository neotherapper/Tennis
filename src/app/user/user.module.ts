import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { CoreModule } from '../core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticatedInterceptor } from '../interceptors/authenticated.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    CoreModule,
  ],
  declarations: [UserPage],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticatedInterceptor,
      multi: true,
    },
  ],
})
export class UserPageModule {}
