import { NgModule } from '@angular/core';

import { PolizzaListComponent } from './polizza-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolizzaListRoutingModule } from './polizza-list.routing-module';
import { PolizzaCardModule } from '../../components/polizza-card/polizza-card.module';

@NgModule({
  imports: [
    CommonModule,
    PolizzaListRoutingModule,
    FormsModule,
    PolizzaCardModule,
  ],
  declarations: [PolizzaListComponent],
})
export class PolizzaListModule {}
