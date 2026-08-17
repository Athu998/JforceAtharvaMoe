import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-bookings.component.html'
})
export class AdminBookingsComponent implements OnInit {

  bookings: any[] = [];

  message = '';

  constructor(
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    // Check admin

    if (!this.authService.isAdmin()) {

      this.message = 'Access denied. Admin only.';

      return;

    }

    this.getAllBookings();

  }


  getAllBookings() {

    this.eventService.getAllBookings().subscribe({

      next: (response: any) => {

        console.log('All bookings:', response);

        this.bookings = response.result;

      },

      error: (error) => {

        console.log('Error:', error);

        this.message =
          error.error?.message ||
          'Error loading event bookings';

      }

    });

  }

}
