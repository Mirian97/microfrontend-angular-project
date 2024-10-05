import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublisherModule } from './publisher/publisher.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PublisherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
