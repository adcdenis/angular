import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <app-menu></app-menu>
  <button (click)="redirecionar()">Ir pra erro</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private router:Router) {
  }

  public redirecionar() {

    console.log("ir pra página de erro");
    this.router.navigate(['404']);
    //this.router.navigateByUrl('404');

  }
}
