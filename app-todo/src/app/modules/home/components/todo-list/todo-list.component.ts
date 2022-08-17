import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("taskList") || '[]');

  constructor() {}
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => {
        return Number(first.checked) - Number(last.checked);
      });

      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }

  ngOnInit(): void {}

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm('Você deseja deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public recebeItemDoComponenteAddItens(event: string) {
    this.taskList.push({ task: event, checked: false });
    //alert('no recebe item:' + event);
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }
}
