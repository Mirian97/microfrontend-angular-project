import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../types/publisher';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styleUrl: './publisher-detail.component.scss',
})
export class PublisherDetailComponent implements OnInit {
  publisherDetail$: Observable<Publisher> = new Observable<Publisher>();

  constructor(
    private route: ActivatedRoute,
    private publisherService: PublisherService
  ) {}

  ngOnInit(): void {
    const publisherId = Number(this.route.snapshot.params['id']);

    this.publisherDetail$ = this.publisherService.getById(publisherId);
  }
}
