import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelAtendPageRoutingModule } from './cancel-atend-routing.module';

import { CancelAtendPage } from './cancel-atend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelAtendPageRoutingModule
  ],
  declarations: [CancelAtendPage]
})
export class CancelAtendPageModule {}
