import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-updatebugform',
  templateUrl: './updatebugform.component.html',
  styleUrls: ['./updatebugform.component.css']
})
export class UpdatebugformComponent implements OnInit {
  title: string = 'Updatebugform';
  bug: Bug = new Bug();
  bugArray: any;

  constructor(private bugService: BugService) { }

  //get bug details to be prepopuleted
  searchBugbyName(name: any) {
    let URL = 'http://localhost:8081/bug/';
    let bugname = (<HTMLInputElement>document.getElementById('name')).value;
    if (bugname) {
      URL = URL + 'name/' + bugname;
      const observable = this.bugService.searchBugbyName1(bugname);
      observable.subscribe(response => {
        this.bugArray = response;
        console.log("success");
        if (this.bugArray) {
          this.bug = this.bugArray;
        }
        else {
          alert("Enter a valid bug name");
        }
      },
        error => {
          console.log(error);
          alert("error");
        })
    }
    else {
      alert("Please enter bug name")
    }
  }

  //updating bug details
  update() {
    if (this.bug.name) {
      this.bug.name = (<HTMLInputElement>document.getElementById('name')).value;

      console.log(this.bug);
      const promise = this.bugService.updateBug(this.bug, this.bug.id);
      promise.subscribe((response: any) => {
        console.log(response);
        alert('Bug is Updated')
      },
        error => {
          console.log(error);
          alert('Error Occured')
        })
    }
    else {
      alert("Enter a valid bug name..")
    }
  }



  ngOnInit(): void {
  }

}
