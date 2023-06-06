import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaAtendPageRoutingModule } from './senha-atend-routing.module';

import { SenhaAtendPage } from './senha-atend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaAtendPageRoutingModule
  ],
  declarations: [SenhaAtendPage]
})
export class SenhaAtendPageModule {}
