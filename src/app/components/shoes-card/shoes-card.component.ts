import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoes } from 'src/app/models/shoe.model';

@Component({
  selector: 'app-shoes-card',
  templateUrl: './shoes-card.component.html',
  styleUrls: ['./shoes-card.component.scss'],
})
export class ShoesCardComponent {
  @Input() item!: Shoes;

  @Output() clicked = new EventEmitter();
}
