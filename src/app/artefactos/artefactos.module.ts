import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtefactosPageRoutingModule } from './artefactos-routing.module';

import { ArtefactosPage } from './artefactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtefactosPageRoutingModule
  ],
  declarations: [ArtefactosPage]
})
export class ArtefactosPageModule {}
