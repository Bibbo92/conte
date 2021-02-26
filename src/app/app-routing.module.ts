import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'polizze-list',
    pathMatch: 'full',
  },
  {
    path: 'polizze-list',
    loadChildren: () =>
      import('./pages/polizza-list/polizza-list.module').then(
        (m) => m.PolizzaListModule
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
