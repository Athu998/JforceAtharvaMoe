import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  message = '';

  constructor(private authService: AuthService) {}

  register() {

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({

      next: (response: any) => {

        this.message = response.message;

      },

      error: (error) => {

        this.message = error.error.message;

      }

    });

  }
}
