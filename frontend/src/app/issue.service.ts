import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
   uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }
  addIssue(name, amount, date, mode) {
    const issue = {
      name: name,
      amount: amount,
      date: date,
      mode: mode
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }
  updateIssue(id, name, amount, date, mode) {
    const issue = {
      name: name,
      amount: amount,
      date: date,
      mode: mode
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
