import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 10;
  private carteira: number = 50;

  constructor() {}

  ngOnInit(): void {}

  public sacarDaPoupanca(valor: string): number | undefined {

    const valorN = Number(valor);

    if (isNaN(valorN) || this.valorPoupanca < valorN) return;

    this.poupanca -= valorN;

    return this.carteira += valorN;
  }

  public daCarteiraParaPoupanca(valor: string): number | undefined  {
    const valorN = Number(valor);

    if (isNaN(valorN) || this.valorCarteira < valorN) return;

    this.carteira -= valorN;

    return this.poupanca += valorN;
  }

  public get valorPoupanca(): number {
    return this.poupanca;
  }

  public get valorCarteira(): number {
    return this.carteira;
  }
}
