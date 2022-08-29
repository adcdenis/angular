import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public msgError!: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {}

  public submitForm() {
    console.log(this.formAuth.value);

    if (this.formAuth.valid) {
      this.auth.sign(this.formAuth.value).subscribe({
        next: (res) => res,
        error: (e) => this.msgError = e,
      });
      console.log(this.formAuth);
    }
  }
}
