import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

// Guards
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard],
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
