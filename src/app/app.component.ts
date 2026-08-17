import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public router: Router) {}

  get showNavbar(): boolean {

    return this.router.url !== '/login' &&
           this.router.url !== '/register';

  }

}
