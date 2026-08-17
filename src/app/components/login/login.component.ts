import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.login(user).subscribe({

      next: (response: any) => {

        localStorage.setItem(
          'user',
          JSON.stringify(response.user)
        );

        this.message = 'Login successful';

        if (response.user.role === 'admin') {

          this.router.navigate(['/add-event']);

        } else {

          this.router.navigate(['/events']);

        }

      },

      error: (error) => {

        this.message = error.error.message;

      }

    });

  }
}
