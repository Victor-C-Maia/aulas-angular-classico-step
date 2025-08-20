import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'aulas-angular-classico';
// }

export class AppComponent {
  email = '';

  submitForm(form: any) {
    console.log('Email enviado:', this.email);
    console.log('Form válido?', form.valid);
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  enviar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}