import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import {GenshinImpactService} from "../services/genshin-impact.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [GenshinImpactService]
})
export class SharedModule { }
