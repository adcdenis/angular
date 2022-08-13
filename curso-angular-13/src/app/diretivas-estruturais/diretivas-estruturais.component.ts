import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome : string, idade:number}> = [{ nome : "Luis", idade: 20}, { nome : "João", idade: 25}, { nome : "Lucas", idade: 40}];
  public nome:string = 'Denis';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) this.condition = false;
      else this.condition = true;
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) this.conditionClick = false;
    else this.conditionClick = true;
  }

  public onClickAddList() {
   this.list.push({ nome : "Antonio", idade: 44});
  }

  public onclickEventList(i:number) {
    this.list.splice(i, 1)
  }
}
