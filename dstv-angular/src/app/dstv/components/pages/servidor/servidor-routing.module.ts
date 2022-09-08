import { ServidorComponent } from './servidor.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ServidorComponent }
	])],
	exports: [RouterModule]
})
export class ServidorRoutingModule { }
