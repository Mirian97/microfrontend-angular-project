import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { HomeComponent } from './home/home.component';
import { PublisherModule } from './publisher/publisher.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    LoadingComponent,
    PublisherFormComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PublisherModule, BookModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
