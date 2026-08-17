import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-event.component.html'
})
export class AddEventComponent {

  event_name = '';
  event_date = '';
  event_location = '';
  event_description = '';

  message = '';

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router
  ) {}

  addEvent() {

    const event = {

      event_name: this.event_name,

      event_date: this.event_date,

      event_location: this.event_location,

      event_description: this.event_description

    };

    this.eventService.addEvent(event).subscribe({

      next: (response: any) => {

        this.message = response.message;

        this.event_name = '';
        this.event_date = '';
        this.event_location = '';
        this.event_description = '';

      },

      error: (error) => {

        this.message = error.error.message;

      }

    });

  }

}
