import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emiteItem = new EventEmitter();

  public itemTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItem() {
    console.log(this.itemTask);

    if(this.itemTask.trim()) {
      this.emiteItem.emit(this.itemTask);
    }
    this.itemTask = '';
  }
}
