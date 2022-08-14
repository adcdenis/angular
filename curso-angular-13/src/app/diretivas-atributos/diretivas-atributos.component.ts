import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPix: string = '20px';
  public backgroundColor: string = 'blue';

  public nome: string = '';
  public list: Array<{ nome: string }> = [
    { nome: 'Antonio' },
    { nome: 'Luiz' },
    { nome: 'José' },
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.heightPix == '20px') {
        this.heightPix = '50px';
      } else {
        this.heightPix = '20px';
      }

      if (this.backgroundColor == 'blue') {
        this.backgroundColor = 'green';
      } else {
        this.backgroundColor = 'blue';
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({nome: this.nome})
    this.nome = "";

  }

}
