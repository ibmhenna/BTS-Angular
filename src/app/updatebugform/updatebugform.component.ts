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
  currentStatus: any;
  bugArray: any;
  today: Date | Date = new Date();

  constructor(private bugService: BugService) { }

  //get bug details to be prepopuleted
  searchBugbyName(name: any) {
    let bugname = (<HTMLInputElement>document.getElementById('name')).value;
    if (bugname) {
      const observable = this.bugService.searchBugbyName1(bugname);
      observable.subscribe(response => {
        this.bugArray = response;
        this.currentStatus = this.bugArray.status;
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
      this.bug.status = (<HTMLInputElement>document.getElementById('status')).value;


      console.log(this.bug);

      console.log(this.bug.status);
      console.log(this.currentStatus);
      console.log(this.today)
      const promise = this.bugService.updateBug(this.bug, this.bug.id);
      promise.subscribe((response: any) => {
        console.log(response);
        alert('Bug is Updated')
      },
        error => {

          if (this.bug.eta <= this.today) {
            alert('ETA should be future date');
          }

          if (this.currentStatus == 'NEW' && (this.bug.status != 'NEW' || this.bug.status != 'ASSIGNED')) {
            alert('Status can be changed only to ASSIGNED');
            return;
          }
          else if (this.currentStatus == 'ASSIGNED' && (this.bug.status != 'ASSIGNED' || this.bug.status != 'OPEN')) {
            alert('Status can be changed only to OPEN');
            return;
          }
          else if (this.currentStatus == 'OPEN' && (this.bug.status != 'OPEN' || this.bug.status != 'DEFERRED' || this.bug.status != 'DUPLICATE' || this.bug.status != 'REJECTED' || this.bug.status != 'NOT_A_BUG' || this.bug.status != 'COULD_NOT_REPRODUCE' || this.bug.status != 'NEED_MORE_INFO' || this.bug.status != 'WONT_FIX' || this.bug.status != 'FIXED')) {
            alert('Status can be changed only to DEFERRED, DUPLICATE, REJECTED, NOT_A_BUG, COULD_NOT_REPRODUCE, NEED_MORE_INFO, WONT_FIX, FIXED');
            return;
          }
          else if (this.currentStatus == 'FIXED' && (this.bug.status != 'FIXED' || this.bug.status != 'PENDING_RETEST')) {
            alert('Status can be changed only to PENDING_RETEST');
            return;
          }
          else if (this.currentStatus == 'PENDING_RETEST' && (this.bug.status != 'PENDING_RETEST' || this.bug.status != 'RETEST')) {
            alert('Status can be changed only to RETEST');
            return;
          }
          else if (this.currentStatus == 'RETEST' && (this.bug.status != 'RETEST' || this.bug.status != 'REOPEN' || this.bug.status != 'VERIFIED')) {
            alert('Status can be changed only to REOPEN or VERIFIED');
            return;
          }
          else if (this.currentStatus == 'REOPEN' && (this.bug.status != 'REOPEN' || this.bug.status != 'DEFERRED' || this.bug.status != 'DUPLICATE' || this.bug.status != 'REJECTED' || this.bug.status != 'NOT_A_BUG' || this.bug.status != 'COULD_NOT_REPRODUCE' || this.bug.status != 'NEED_MORE_INFO' || this.bug.status != 'WONT_FIX' || this.bug.status != 'FIXED')) {
            alert('Status can be changed only to DEFERRED, DUPLICATE, REJECTED, NOT_A_BUG, COULD_NOT_REPRODUCE, NEED_MORE_INFO, WONT_FIX or FIXED');
            return;
          }
          else if (this.currentStatus == 'VERIFIED' && (this.bug.status != 'VERIFIED' || this.bug.status != 'CLOSED')) {
            alert('Status can be changed only to VERIFIED or CLOSED');
            return;
          }
          else if (this.currentStatus == 'WONT_FIX' && (this.bug.status != 'WONT_FIX' || this.bug.status != 'CLOSED')) {
            alert('Status can be changed only to WONT_FIX or CLOSED');
            return;
          }
          else if (this.currentStatus == 'DUPLICATE' && (this.bug.status != 'DUPLICATE' || this.bug.status != 'CLOSED')) {
            alert('Status can be changed only to DUPLICATE  or CLOSED');
            return;
          }
          else if (this.currentStatus == 'REJECTED' && (this.bug.status != 'REJECTED' || this.bug.status != 'CLOSED')) {
            alert('Status can be changed only to REJECTED or CLOSED');
            return;
          }
          else if (this.currentStatus == 'NOT_A_BUG' && (this.bug.status != 'NOT_A_BUG' || this.bug.status != 'CLOSED')) {
            alert('Status can be changed only to NOT_A_BUG orCLOSED');
            return;
          }
          else if (this.currentStatus == 'COULD_NOT_REPRODUCE' && (this.bug.status != 'COULD_NOT_REPRODUCE' || this.bug.status != 'DEFERRED')) {
            alert('Status can be changed only to DEFERRED');
            return;
          }
          else if (this.currentStatus == 'NEED_MORE_INFO' && (this.bug.status != 'NEED_MORE_INFO' || this.bug.status != 'DEFERRED')) {
            alert('Status can be changed only to NEED_MORE_INFO or DEFERRED');
            return;
          }
          else if (this.currentStatus == 'DEFERRED' && (this.bug.status != 'DEFERRED' || this.bug.status != 'ASSIGNED')) {
            alert('Status can be changed only to DEFERRED or ASSIGNED');
            return;
          }
          else if (this.currentStatus == 'CLOSED' && this.bug.status != 'CLOSED') {
            alert('Status can be changed only to CLOSED');
            return;
          }

          console.log(error);
          // alert('Error Occured')
        })
    }
    else {
      alert("Enter a valid bug name..")
    }
  }

  ngOnInit(): void {
  }

}
