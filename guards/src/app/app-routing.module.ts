import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { AccountComponent } from './shared/pages/account/account.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDesativateGuard } from './shared/guards/can-desativate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDesativateGuard],
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
