import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova task', checked: true },
    { task: 'Minha nova task 2', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {

    const confirm = window.confirm("Você deseja deletar tudo?");

    if(confirm) {
      this.taskList = [];
    }
  }
}
