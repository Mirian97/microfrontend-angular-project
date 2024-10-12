import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    const publisherId = Number(this.route.snapshot.params['id']);
    this.publisherService.getById(publisherId).subscribe((data) => {
      this.publisher = data;
    });
  }
}
