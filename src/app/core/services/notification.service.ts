import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private toastr: ToastController) {}

  public async success(msg: string, title: string) {
    const toast = await this.toastr.create({
      header: title,
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  public async error(msg: string, title: string) {
    const toast = await this.toastr.create({
      header: title,
      message: msg,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
