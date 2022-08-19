import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
    <!-- <app-new-component> </app-new-component> -->

    <!-- <app-input [contador]="adicionarValor"> </app-input>
  <button (click)="add()">Add</button> -->



    <!-- <app-output (enviarDados)="setDados($event)"> </app-output>

    <ng-template [ngIf]="dadosRecebidos">
      <h1>{{dadosRecebidos.nome}}</h1>
      <h1>{{dadosRecebidos.idade}}</h1>

    </ng-template> -->

    <!-- <app-food-list></app-food-list> -->

    <app-forms></app-forms>

    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit, OnChanges {
  public valor: number = 0;
  public adicionarValor: number = 0;

  public dadosRecebidos: { nome: string, idade: number } | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('teste canuto');
    // }, 5000);
  }

  public adicionar(): number {
    return (this.valor += 1);
  }

  public add() {
    this.adicionarValor++;
  }

  public setDados(event: { nome: string, idade: number }) {
    console.log("recebido evento")
    this.dadosRecebidos = event;
    alert(event.nome);
  }
}
