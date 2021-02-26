import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolizzaListModule } from './pages/polizza-list/polizza-list.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { CustomInputModule } from './components/custom-input/custom-input.module';
import { PolizzaCardModule } from './components/polizza-card/polizza-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PolizzaListModule,
    RegistrationModule,
    CustomInputModule,
    PolizzaCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
