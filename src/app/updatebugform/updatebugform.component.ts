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

  searchBugbyName(name:any){
    console.log(this.bug.name);
    const observable = this.bugService.searchBugbyName(this.bug.name);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=[response];
        console.log("success");
        console.log(this.bug.id);
      },
      error=>{
        console.log(error);
        alert("error");
      })
  }

  update() {
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


  ngOnInit(): void {
  }

}
