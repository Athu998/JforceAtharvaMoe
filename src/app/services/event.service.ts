import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getEvents() {

    return this.http.get(
      `${this.apiUrl}/allEvents`
    );

  }

  addEvent(event: any) {

    return this.http.post(
      `${this.apiUrl}/addEvent`,
      event
    );

  }

  bookEvent(eventId: number, userId: number) {

    return this.http.post(
      `${this.apiUrl}/bookEvent`,
      {
        event_id: eventId,
        user_id: userId
      }
    );

  }

  getMyBookings(userId: number) {

    return this.http.get(
      `${this.apiUrl}/myBookings/${userId}`
    );

  }


  getAllBookings() {

    return this.http.get(
        `${this.apiUrl}/seeAllBookings`
    );

}

}
