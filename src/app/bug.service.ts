import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';

const URL = 'http://localhost:8081/bug';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }

  //save bug
  save(bug: Bug) {
    return this.http.post(URL, bug, {
      headers: {
        "content-type": 'application/json'
      },
      responseType: "text"
    });
  }

  //get all bugs
  getAllBugs() {
    return this.http.get(URL);
  }

  //get bug by name
  searchBugbyName(name: any) {
    return this.http.get(URL + '/' + name, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
    });
  }

  searchBugbyName1(name: any) {
    return this.http.get(URL + '/name/' + name, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
    });
  }

  //search bug by status
  searchBugbyStatus(status: any) {
    return this.http.get(URL + '/status/' + status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
    });
  }

  getBugbyStatusAndName(name: string, status: string) {
    return this.http.get(URL+'/search/'+ name+'/'+status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }

  //update bug
  updateBug(bug: Bug, id: string) {
    return this.http.put(URL + '/' + id, bug, {
      headers: { "content-type": 'application/json' }
    })
  }

  //delete bug
  delete(id: any) {
    return this.http.delete(URL + '/' + id);
  }
}
