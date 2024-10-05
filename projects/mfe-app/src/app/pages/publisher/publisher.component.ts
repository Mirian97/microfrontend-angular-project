import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from './../../types/publisher';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.scss',
})
export class PublisherComponent implements OnInit {
  publisherList$: Observable<Publisher[]> = new Observable<Publisher[]>(); // Sufixo $ para indicar Observable

  constructor(private publisherService: PublisherService) {}

  ngOnInit(): void {
    this.publisherList$ = this.publisherService.get();
  }
}
