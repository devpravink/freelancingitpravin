
import { Component } from '@angular/core';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  notifications: NotificationItem[] = [];
  private nextId = 1;

  showNotification(type: NotificationType): void {
    const content: Record<
      NotificationType,
      { title: string; message: string }
    > = {
      success: {
        title: 'Success!',
        message: 'Your changes have been saved successfully.',
      },
      error: {
        title: 'Something went wrong!',
        message: 'Your request could not be completed. Please try again.',
      },
      warning: {
        title: 'Warning!',
        message: 'Please check your information before continuing.',
      },
      info: {
        title: 'Information',
        message: 'You have a new notification waiting for you.',
      },
    };

    const id = this.nextId++;

    this.notifications = [
      ...this.notifications,
      { id, type, ...content[type] },
    ];

    setTimeout(() => this.closeNotification(id), 5000);
  }

  closeNotification(id: number): void {
    this.notifications = this.notifications.filter(
      notification => notification.id !== id
    );
  }
}
