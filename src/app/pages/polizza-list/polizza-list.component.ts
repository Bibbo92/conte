import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PolizzeService } from '../../service/polizze.service';
import { Polizza } from '../../interfaces/polizza';
import { Router } from '@angular/router';

@Component({
  selector: 'my-user-list',
  templateUrl: './polizza-list.component.html',
  styleUrls: ['./polizza-list.component.scss'],
})
export class PolizzaListComponent implements OnInit {
  polizzeList: Polizza[] = [];
  selectedPolizza: Polizza;

  constructor(
    private polizzeListService: PolizzeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.polizzeList = this.polizzeListService.getPolizzeList();
  }

  goToRegistration() {
    this.router.navigateByUrl('/registration');
  }

  removePolizza() {
    this.polizzeList = this.polizzeListService.removePolizza(
      this.selectedPolizza.id
    );
  }

  editPolizza() {
    this.polizzeListService.selectedPolizza = this.selectedPolizza;
    this.router.navigateByUrl('/registration');
  }

  cardClicked(event: any) {
    this.selectedPolizza = event;
  }
}
