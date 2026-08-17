import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AdminBookingsComponent } from './components/admin-bookings/admin-bookings.component';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },

  {
    path: 'events',
    component: EventsComponent
  },

  {
    path: 'add-event',
    component: AddEventComponent,
    canActivate: [authGuard]
  },

  {
    path: 'admin-bookings',
    component: AdminBookingsComponent,
    canActivate: [authGuard]
  }

];
