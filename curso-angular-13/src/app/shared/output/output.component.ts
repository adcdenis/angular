import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'canuto', idade: 44 },
    { nome: 'Carla', idade: 32 },
    { nome: 'Isa', idade: 5 },
  ];

  @Output() public enviarDados = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    console.log(this.list[event]);
    this.enviarDados.emit(this.list[event]);
  }
}
