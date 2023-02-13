import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/login';

  login(data: LoginModel) {
    return this.httpClient.post(this.url, data);
  }
}
