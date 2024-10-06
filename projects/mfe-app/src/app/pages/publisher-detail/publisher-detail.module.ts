import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PublisherDetailComponent } from './publisher-detail.component';

@NgModule({
  declarations: [PublisherDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublisherDetailComponent,
      },
    ]),
  ],
  providers: [provideHttpClient()],
})
export class PublisherDetailModule {}
