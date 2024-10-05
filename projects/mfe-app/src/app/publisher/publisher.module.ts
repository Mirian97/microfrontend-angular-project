import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PublisherComponent } from './publisher.component';

@NgModule({
  declarations: [PublisherComponent],
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
})
export class PublisherModule {}
