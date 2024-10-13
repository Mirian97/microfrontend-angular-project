import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../types/publisher';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styleUrl: './publisher-detail.component.scss',
})
export class PublisherDetailComponent implements OnInit {
  publisher: Publisher | null = null;

  constructor(
    private route: ActivatedRoute,
    private publisherService: PublisherService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const publisherId = Number(params['id']);
          return this.publisherService.getById(publisherId);
        })
      )
      .subscribe((publisher) => {
        this.publisher = publisher;
      });
  }
}
