import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PublisherItemComponent } from '../components/publisher-item/publisher-item.component';
import { PublisherListComponent } from '../components/publisher-list/publisher-list.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PUBLISHER_ROUTES } from './publisher.routes';
import { PublishersComponent } from './publishers/publishers.component';

@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherItemComponent,
    PublishersComponent,
    PublisherDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(PUBLISHER_ROUTES),
  ],
  providers: [provideHttpClient()],
})
export class PublisherModule {}
