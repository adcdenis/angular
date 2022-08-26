import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LeadsComponent } from './pages/leads/leads.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    LeadsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
