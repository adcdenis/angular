import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) Poupança deve ter o valor de 10', () => {
    expect(component.valorPoupanca).toEqual(10);
  });

  it('(U) Carteira deve ter o valor de 50', () => {
    expect(component.valorCarteira).toEqual(50);
  });

  it('(U) Sacar deve transferir da poupança para a carteira', () => {
    expect(component.sacarDaPoupanca('10'));
   //fixture.detectChanges();
    expect(component.valorPoupanca).toEqual(0);
    expect(component.valorCarteira).toEqual(60);

  });

  it('(U) Sacar não é string e não pode ser menor que zero -  if (isNaN(valorN) || this.valorPoupanca < valorN) return', () => {
    expect(component.sacarDaPoupanca('string')).not.toBeTruthy();
    expect(component.sacarDaPoupanca('100')).not.toBeTruthy();

    expect(component.valorPoupanca).toEqual(10);
    expect(component.valorCarteira).toEqual(50);

  });

  it('(U) Depositar da carteira para a poupança', () => {
    expect(component.daCarteiraParaPoupanca('30'));
    //fixture.detectChanges();
    expect(component.valorPoupanca).toEqual(40);
    expect(component.valorCarteira).toEqual(20);

  });

  it('(U) Depositar não é string e não pode ser menor que zero -  if (isNaN(valorN) || this.daCarteiraParaPoupanca < valorN) return', () => {
    expect(component.daCarteiraParaPoupanca('string')).not.toBeTruthy();
    expect(component.daCarteiraParaPoupanca('100')).not.toBeTruthy();

    expect(component.valorPoupanca).toEqual(10);
    expect(component.valorCarteira).toEqual(50);
  });

});
