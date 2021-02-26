import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration.routing-module';
import { CustomInputModule } from '../../components/custom-input/custom-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextValueAccessorDirective } from '../../directives/text-value-accessor.directive';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    CustomInputModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrationComponent,TextValueAccessorDirective],
})
export class RegistrationModule {}
