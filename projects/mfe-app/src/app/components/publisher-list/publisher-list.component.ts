import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../types/publisher';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss',
})
export class PublisherListComponent implements OnInit {
  publisherList$: Observable<Publisher[]> = new Observable<Publisher[]>();

  constructor(private readonly publisherService: PublisherService) {}

  ngOnInit(): void {
    this.publisherList$ = this.publisherService.get();
  }
}
