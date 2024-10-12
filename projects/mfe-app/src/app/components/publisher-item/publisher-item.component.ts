import { Component, Input } from '@angular/core';
import { Publisher } from '../../types/publisher';

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrl: './publisher-item.component.scss',
})
export class PublisherItemComponent {
  @Input() publisher!: Publisher;
}
