import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavItemComponent,
    NavListComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
