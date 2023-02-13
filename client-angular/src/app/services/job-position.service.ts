import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobPositionModel } from 'src/app/model/job-position';

@Injectable({
  providedIn: 'root',
})
export class JobPositionService {
  constructor(private httpClient: HttpClient) {}

  token = localStorage.getItem('access_token') || 'salah';
  httpOptions = { headers: new HttpHeaders().set('access_token', this.token) };
  url = `http://localhost:3000/job-positions`;

  getAllJobPositions() {
    return this.httpClient.get(this.url, this.httpOptions);
  }

  addJobPosition(data: JobPositionModel) {
    return this.httpClient.post(this.url, data, this.httpOptions);
  }

  getOneJobPosition(id: JobPositionModel) {
    return this.httpClient.get(`${this.url}/${id}`, this.httpOptions);
  }

  editJobPosition(id: JobPositionModel, data: JobPositionModel) {
    return this.httpClient.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  deleteJobPosition(id: JobPositionModel) {
    return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
