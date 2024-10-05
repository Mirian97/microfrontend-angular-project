import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
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
  providers: [provideHttpClient()],
})
export class PublisherModule {}
