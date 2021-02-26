import { NgModule } from '@angular/core';

import { CustomInputComponent } from './custom-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomInputComponent],
  exports: [CustomInputComponent],
})
export class CustomInputModule {}
