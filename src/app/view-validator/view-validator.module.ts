import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewValidatorPageRoutingModule } from './view-validator-routing.module';

import { ViewValidatorPage } from './view-validator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewValidatorPageRoutingModule
  ],
  declarations: [ViewValidatorPage]
})
export class ViewValidatorPageModule {}
