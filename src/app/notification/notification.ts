
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification implements OnInit, OnDestroy {

  showPopup = false;
  imageError = false;

  private popupTimer?: ReturnType<typeof setTimeout>;

  constructor(private router: Router) {}

ngOnInit(): void {
  this.popupTimer = setTimeout(() => {
    this.showPopup = true;
  }, 1500);
}

  closePopup(): void {
    this.showPopup = false;

    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
      this.popupTimer = undefined;
    }
  }

  exploreServices(): void {
    this.closePopup();
    void this.router.navigate(['/services']);
  }

  ngOnDestroy(): void {
    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
    }
  }
}
