import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomInputInterface } from '../../interfaces/customInputInterface';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  //per una maggiore leggibilità ho preferito creare un'interfaccia che racchiuda gli elementi in input al componente
  @Input() input: CustomInputInterface;

  @Output() valueUpdate: EventEmitter<any> = new EventEmitter();

  placeholder: string;

  constructor() {}

  ngOnInit(): void {
    this.placeholder = `Inserisci ${this.input.inputName}`;
  }

  userTyping(event: any) {
    this.valueUpdate.emit(event.target.value);
  }
}
