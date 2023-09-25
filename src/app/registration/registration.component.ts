import { Component } from '@angular/core';
import { RegisterService } from './register.service';

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
    password: '',
  };

  constructor(private service: RegisterService) {}

  onSubmit() {
    console.log(this.formData);
    this.service.addUser(this.formData).subscribe((r) => console.log(r));
  }
}
