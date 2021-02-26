import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizzaListComponent } from './polizza-list.component';

const routes: Routes = [
  {
    path: '',
    component: PolizzaListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolizzaListRoutingModule {}
