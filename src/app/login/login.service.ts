import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from '../shared/loginResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(requestBody: any) {
    return this.http.post<loginResponse>('http://localhost:8080/auth/authenticate', requestBody);
  }
}
