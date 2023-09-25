import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  formData = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log("user created!")
  }
}
