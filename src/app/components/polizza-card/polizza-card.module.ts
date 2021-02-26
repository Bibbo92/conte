import { NgModule } from '@angular/core';

import { PolizzaCardComponent } from './polizza-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [PolizzaCardComponent],
  declarations: [PolizzaCardComponent],
})
export class PolizzaCardModule {}
