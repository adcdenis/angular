import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  public submit() {
    console.log();
    if (this.formAuth.valid) {
      console.log();
    }
  }
}
