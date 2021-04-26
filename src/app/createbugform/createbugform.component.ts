import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-createbugform',
  templateUrl: './createbugform.component.html',
  styleUrls: ['./createbugform.component.css']
})
export class CreatebugformComponent implements OnInit {
  title: string = 'Createbugform';
  bug: Bug = new Bug();
  bugArray: any;
  today: Date= new Date();

  constructor(private bugService: BugService) { }

  save() {
    console.log(this.bug.name);
    this.bug.status = "NEW";
    const observable = this.bugService.save(this.bug);

    observable.subscribe(response => {
      console.log(response);
      this.bug.id = response;
      alert('Bug is added....');
      this.bugArray.push(Object.assign({}, this.bug));
    },
      error => {
        if (this.bug.eta) {
          this.today.toDateString()
          alert('ETA should be future date');
        }
        else {
          console.log(error);
          alert("Please fill all the fields")
        }

      })
  }

  ngOnInit(): void {
  }

}
