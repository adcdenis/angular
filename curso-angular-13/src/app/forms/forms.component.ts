import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public alimentos:Array<{nome:string}> = [{ nome:"salada"}, { nome:"bacon"}, { nome:"ovos"}];

  constructor() { }

  ngOnInit(): void {
  }

  public submit(form:NgForm) {

    if (form.valid) {
      console.log(form.value);
    }
  }

}
