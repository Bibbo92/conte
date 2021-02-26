import { Injectable } from '@angular/core';
import { Polizza } from '../interfaces/polizza';

@Injectable({ providedIn: 'root' })
export class PolizzeService {
  polizzeList: Polizza[] = [];
  selectedPolizza: Polizza;

  constructor() {}

  getPolizzeList() {
    return this.polizzeList;
  }

  addNewPolizza(polizza: Polizza) {
    this.polizzeList.push(polizza);
  }

  removePolizza(id: number) {
    this.polizzeList = this.polizzeList.filter((polizza) => polizza.id !== id);
    this.selectedPolizza = null;
    return this.polizzeList;
  }

  editPolizza(polizza: Polizza) {
    this.polizzeList.forEach((element) => {
      if (element.id === polizza.id) {
        element.name = polizza.name;
        element.surname = polizza.surname;
        element.model = polizza.model;
        element.password = polizza.password;
        element.licensePlate = polizza.licensePlate;
        element.selected = false;
      }
    });

    this.selectedPolizza = null;
  }
}
