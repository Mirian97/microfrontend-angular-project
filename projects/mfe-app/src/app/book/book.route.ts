import { Routes } from '@angular/router';
import { HomeBookComponent } from './home-book/home-book.component';

export const BOOKS_ROUTES: Routes = [
  {
    path: 'book',
    component: HomeBookComponent,
  },
];
