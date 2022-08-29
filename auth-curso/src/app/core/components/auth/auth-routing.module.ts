import { SignComponent } from './pages/sign/sign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
