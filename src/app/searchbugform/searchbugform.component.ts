import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-searchbugform',
  templateUrl: './searchbugform.component.html',
  styleUrls: ['./searchbugform.component.css']
})
export class SearchbugformComponent implements OnInit {
  title: String = 'Searchbugform';
  bug: Bug = new Bug();
  bugArray: any;

  constructor(private bugService: BugService) { }

  deleteBug(id: any, index: number) {
    if (confirm("Are you sure about deleting the bug?")) {
      const observable = this.bugService.delete(id);
      observable.subscribe(response => this.bugArray.splice(index, 1))
      alert("Bug is deleted....!")
    }
    else {
      alert("Cancelled delete bug operation...")
    }
  }


  searchBugbyName(name: any) {
    console.log(this.bug.name);
    const observable = this.bugService.searchBugbyName(this.bug.name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = [response];
      if (this.bugArray[0]==undefined) {
        alert("No bug found")

      } else {
        alert("Displaying bugs..")
      }
    },
      error => {
        alert("Error Occured. Not able to search..");
      })
  }

  searchBugbyStatus(status: any) {
    const observable = this.bugService.searchBugbyStatus(status);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
      if (this.bugArray[0]==undefined) {
        alert("No bug found")

      } else {
        alert("Displaying bugs..")
      }
    },
      error => {
        alert("Error Occured. Not able to search..");
      })
  }

  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;

    });
  }
}
