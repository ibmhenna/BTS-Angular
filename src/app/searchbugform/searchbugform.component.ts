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
  bugList: any;

  constructor(private bugService: BugService) { }

  // delete bug
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

  //SEARCH BUG BY NAME AND STATUS

  searchBugbyNameandStatus() {
    let status = (<HTMLInputElement>document.getElementById('status')).value;
    let name = (<HTMLInputElement>document.getElementById('name')).value;

    //IF BOTH FIELDS ARE AVAILABLE
    if (this.bug.name != undefined && this.bug.status != undefined) {
      const observable = this.bugService.getBugbyStatusAndName(name, status);
      observable.subscribe(response => {
        console.log(response);
        this.bugList = response;
        if (this.bugList != 0) {
          this.bugArray = this.bugList;
        }
        else {
          alert("No Bug with Name : " + name + " and Status : " + status + " found");
          this.bugArray = [];
        }
      },
        error => {
          alert('error happened..')
        })
    }

    //IF ONLY BUG NAME IS AVAILABLE
    if (this.bug.name != undefined && this.bug.status == undefined) {
      const observable = this.bugService.searchBugbyName(this.bug.name);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray = response;
        if (this.bugArray[0] == undefined) {
          alert("No bug found")

        } else {
          alert("Displaying bugs with similar name " + name)
        }
      },
        error => {
          alert("Error Occured. Not able to search..");
        })
    }

    //IF ONLY STATUS IS AVAILABLE
    if (this.bug.name == undefined && this.bug.status != undefined) {
      const observable = this.bugService.searchBugbyStatus(status);
      observable.subscribe(response => {
        console.log(response);
        this.bugArray = response;
        if (this.bugArray[0] == undefined) {
          alert("No bug found")

        } else {
          alert("Displaying bugs with status " + status)
        }
      },
        error => {
          alert("Error Occured. Not able to search..");
        })
    }

    //IF BOTH FIELDS ARE NOT AVAILABLE
    if (this.bug.name == undefined && this.bug.status == undefined) {
      alert("Please enter BUG NAME or STATUS")
    }
  }

  refreshPage() {
    window.location.reload();
  }

  showSynopsis(synopsis: string) {
    alert(synopsis);
  }

  showDescription(description: string) {
    // Swal.fire(description);
     alert(description);
  }


  //get all bugs
  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;

    });
  }
}
