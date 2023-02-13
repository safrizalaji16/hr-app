import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  token = localStorage.getItem('access_token') || 'salah';
  httpOptions = { headers: new HttpHeaders().set('access_token', this.token) };
  url = `http://localhost:3000/employees`;

  getAllEmployees() {
    return this.httpClient.get(this.url, this.httpOptions);
  }

  addEmployee(data: EmployeeModel) {
    return this.httpClient.post(this.url, data, this.httpOptions);
  }

  getOneEmployee(id: EmployeeModel) {
    return this.httpClient.get(`${this.url}/${id}`, this.httpOptions);
  }

  editEmployee(id: EmployeeModel, data: EmployeeModel) {
    return this.httpClient.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  deleteEmployee(id: EmployeeModel) {
    return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
