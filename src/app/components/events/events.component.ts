import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any[] = [];
  bookings: any[] = [];
  message = '';
  user: any;

  constructor(
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.user = this.authService.getUser();

    console.log('Logged user:', this.user);

    this.getEvents();
    this.getMyBookings();

  }


  getEvents() {

    this.eventService.getEvents().subscribe({

      next: (response: any) => {

        console.log('Events API response:', response);

        this.events = response.result;

        console.log('Events:', this.events);

      },

      error: (error) => {

        console.log('Events API error:', error);

        this.message =
          error.error?.message || 'Error loading events';

      }

    });

  }


  bookEvent(eventId: number) {

    this.eventService
      .bookEvent(eventId, this.user.id)
      .subscribe({

        next: (response: any) => {

          this.message = response.message;

          this.getMyBookings();

        },

        error: (error) => {

          console.log('Booking error:', error);

          this.message =
            error.error?.message || 'Error booking event';

        }

      });

  }


  getMyBookings() {

    this.eventService
      .getMyBookings(this.user.id)
      .subscribe({

        next: (response: any) => {

          console.log('My bookings:', response);

          this.bookings = response.result;

        },

        error: (error) => {

          console.log('Booking fetch error:', error);

          this.message =
            error.error?.message || 'Error loading bookings';

        }

      });

  }

}
