import { Routes } from '@angular/router';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublishersComponent } from './publishers/publishers.component';

export const PUBLISHER_ROUTES: Routes = [
  {
    path: 'publisher',
    children: [
      {
        path: '',
        component: PublishersComponent,
      },
      {
        path: ':id',
        component: PublisherDetailComponent,
      },
    ],
  },
];
