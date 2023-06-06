import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adm2PageRoutingModule } from './adm2-routing.module';

import { Adm2Page } from './adm2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adm2PageRoutingModule
  ],
  declarations: [Adm2Page]
})
export class Adm2PageModule {}
