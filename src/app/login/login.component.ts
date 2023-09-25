import { Component } from '@angular/core';
import { LoginService } from './login.service';

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

  constructor(private service: LoginService) {}

  onSubmit() {
    console.log(this.formData);
    this.service.login(this.formData).subscribe((r) => console.log(r));
  }
}
