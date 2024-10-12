import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../types/publisher';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrl: './publishers.component.scss',
})
export class PublishersComponent implements OnInit {
  publisherList$: Observable<Publisher[]> = new Observable<Publisher[]>();

  constructor(private publisherService: PublisherService) {}

  ngOnInit(): void {
    this.publisherList$ = this.publisherService.get();
  }
}
