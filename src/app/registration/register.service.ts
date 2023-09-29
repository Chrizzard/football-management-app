import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { loginResponse } from '../shared/loginResponse';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  addUser(requestBody: any) {
    const response = this.http.post<loginResponse>('http://localhost:8080/auth/register', requestBody);
    return response
  }
}
