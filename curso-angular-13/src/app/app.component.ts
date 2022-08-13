import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos></app-diretivas-atributos>
  <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges {

  public valor: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    setTimeout(() => {

      console.log("teste canuto")

    }, 5000)
  }

  public adicionar():number {
    return this.valor += 1;

  }
}
