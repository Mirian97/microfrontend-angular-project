import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('mfeApp/PublisherModule')
        .then((m) => m.PublisherModule)
        .catch((err) => console.error(err)),
  },
  {
    path: '',
    loadChildren: () =>
      import('mfeApp/BookModule')
        .then((m) => m.BookModule)
        .catch((err) => console.error(err)),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
