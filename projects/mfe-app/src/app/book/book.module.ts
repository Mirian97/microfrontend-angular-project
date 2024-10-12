import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BOOKS_ROUTES } from './book.route';
import { HomeBookComponent } from './home-book/home-book.component';

@NgModule({
  declarations: [HomeBookComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(BOOKS_ROUTES)],
})
export class BookModule {}
