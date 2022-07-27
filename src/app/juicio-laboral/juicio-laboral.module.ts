import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../comun/shared-module/shared.module';
import {PagerModule} from '../comun/paginado/pager/pager.module';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagerModule
  ],
  providers:[

  ]
})
export class JuicioLaboralModule { }
