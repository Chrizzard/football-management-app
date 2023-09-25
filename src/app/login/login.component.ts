import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Login successful!');
  }
}
