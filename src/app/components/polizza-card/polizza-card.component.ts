import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Polizza } from '../../interfaces/polizza';

@Component({
  selector: 'polizza-card',
  templateUrl: './polizza-card.component.html',
  styleUrls: ['./polizza-card.component.scss'],
})
export class PolizzaCardComponent implements OnInit {
  @Input() polizza: Polizza;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  cardClicked() {
    this.polizza.selected = !this.polizza.selected;
    this.itemClicked.emit(this.polizza);
  }
}
