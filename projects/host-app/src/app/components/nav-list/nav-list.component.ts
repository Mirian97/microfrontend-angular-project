import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
})
export class NavListComponent {
  navItems = [
    { icon: 'deployed_code', location: 'home', label: 'Home' },
    {
      icon: 'menu_book',
      location: 'publisher',
      label: 'Livros',
    },
    {
      icon: 'local_library',
      location: 'publisher',
      label: 'Editoras',
    },
  ];

  constructor() {}
}
