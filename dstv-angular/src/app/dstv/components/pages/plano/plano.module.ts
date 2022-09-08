import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanoRoutingModule } from './plano-routing.module';
import { PlanoComponent } from './plano.component';



@NgModule({
  declarations: [
    PlanoComponent
  ],
  imports: [
    CommonModule,
    PlanoRoutingModule
  ]
})
export class PlanoModule { }
