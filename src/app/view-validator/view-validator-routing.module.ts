import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewValidatorPage } from './view-validator.page';

const routes: Routes = [
  {
    path: '',
    component: ViewValidatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewValidatorPageRoutingModule {}
