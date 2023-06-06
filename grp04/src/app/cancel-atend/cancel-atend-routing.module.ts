import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelAtendPage } from './cancel-atend.page';

const routes: Routes = [
  {
    path: '',
    component: CancelAtendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelAtendPageRoutingModule {}
