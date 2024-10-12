import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent implements OnInit {
  @Input() location!: string;
  @Input() icon!: string;
  @Input() label!: string;
  active: boolean = false;
  url = window.location.pathname;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setActiveBasedOnUrl(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.setActiveBasedOnUrl(this.router.url));
  }

  setActiveBasedOnUrl(url: string): void {
    this.active = url.startsWith(`/${this.location}`);
  }
}
