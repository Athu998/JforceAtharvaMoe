import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {}


  register(user: any) {

    return this.http.post(
      `${this.apiUrl}/register`,
      user
    );

  }


  login(user: any) {

    return this.http.post(
      `${this.apiUrl}/login`,
      user
    );

  }


  logout() {

    localStorage.removeItem('user');

  }


  getUser() {

    const user =
      localStorage.getItem('user');

    if (user) {

      return JSON.parse(user);

    }

    return null;

  }


  isLoggedIn() {

    return localStorage.getItem('user') !== null;

  }


  isAdmin() {

    const user = this.getUser();

    return user?.role === 'admin';

  }

}
