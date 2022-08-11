import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <app-title title="Input test"></app-title>
  <app-data-binding></app-data-binding>
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
