import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanoComponent } from './plano.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PlanoComponent }
	])],
	exports: [RouterModule]
})
export class PlanoRoutingModule { }
