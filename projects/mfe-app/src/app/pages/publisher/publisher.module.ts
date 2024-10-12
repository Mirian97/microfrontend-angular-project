import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PublisherItemComponent } from '../../components/publisher-item/publisher-item.component';
import { PublisherListComponent } from '../../components/publisher-list/publisher-list.component';
import { PublisherComponent } from './publisher.component';

@NgModule({
  declarations: [
    PublisherComponent,
    PublisherListComponent,
    PublisherItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublisherComponent,
      },
    ]),
  ],
  providers: [provideHttpClient()],
})
export class PublisherModule {}
