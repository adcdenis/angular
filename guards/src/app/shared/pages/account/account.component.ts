import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public exit() {
    if (confirm('Deseja sair?')) {
      return true;
    } else {
      return false;
    }
  }
}
