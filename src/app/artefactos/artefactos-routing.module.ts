import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtefactosPage } from './artefactos.page';

const routes: Routes = [
  {
    path: '',
    component: ArtefactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtefactosPageRoutingModule {}
