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

  constructor(private bugService: BugService) { }

  save() {
    console.log(this.bug.name);
    const observable = this.bugService.save(this.bug);

    observable.subscribe(response => {
      console.log(response);
      this.bug.id = response;
      this.bugArray.push(Object.assign({}, this.bug));
      alert('Bug is added....');
    },
      error => {
        console.log(error);
        alert("Error occured...")
      })

  }

  ngOnInit(): void {
  }

}
