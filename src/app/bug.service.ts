import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';
const URL = 'http://localhost:8081/bug';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(bug: Bug) {
    return this.http.post(URL, bug, {
      headers: {
        "content-type": 'application/json'
      },
      responseType: "text"
    });
  }

  getAllBugs() {
    return this.http.get(URL);
  }

  searchBugbyName(name:any) {
      return this.http.get(URL+'name/'+ name, {
        headers: {
          "content-type": 'application/json',
          reponseType: 'text'
        }
        });
  }
}
