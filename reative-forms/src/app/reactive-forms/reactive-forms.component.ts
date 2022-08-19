import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
  });

  ngOnInit(): void {}

  public submit() {

    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }
  }
}
