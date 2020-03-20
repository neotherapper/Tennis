import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class ErrorService {

  constructor(private notificationService: NotificationService) {
  }

  handleError(err: string) {
    this.notificationService.error(`${err}`, 'Error');
    console.error(`${err}`, 'Error');
  }
}
