import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { PublisherItemComponent } from './components/publisher-item/publisher-item.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherDetailModule } from './pages/publisher-detail/publisher-detail.module';
import { PublisherModule } from './pages/publisher/publisher.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    LoadingComponent,
    PublisherItemComponent,
    PublisherListComponent,
    PublisherFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublisherModule,
    PublisherDetailModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
