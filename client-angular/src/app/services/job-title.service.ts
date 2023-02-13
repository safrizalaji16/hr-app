import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobTitleModel } from '../model/job-title';

@Injectable({
  providedIn: 'root',
})
export class JobTitleService {
  constructor(private httpClient: HttpClient) {}

  token = localStorage.getItem('access_token') || 'salah';
  httpOptions = { headers: new HttpHeaders().set('access_token', this.token) };
  url = `http://localhost:3000/job-titles`;

  getAllJobTitles() {
    return this.httpClient.get(this.url, this.httpOptions);
  }

  addJobTitle(data: JobTitleModel) {
    return this.httpClient.post(this.url, data, this.httpOptions);
  }

  getOneJobTitle(id: JobTitleModel) {
    return this.httpClient.get(`${this.url}/${id}`, this.httpOptions);
  }

  editJobTitle(id: JobTitleModel, data: JobTitleModel) {
    return this.httpClient.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  deleteJobTitle(id: JobTitleModel) {
    return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
