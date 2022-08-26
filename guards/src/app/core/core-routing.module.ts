import { LeadsComponent } from './pages/leads/leads.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
  },
  {
    path: 'leads',
    component: LeadsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
