import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-createbugform',
  templateUrl: './createbugform.component.html',
  styleUrls: ['./createbugform.component.css']
})
export class CreatebugformComponent implements OnInit {
  title:string = 'Createbugform';
  bug:Bug=new Bug();
  bugArray:Bug[]=[];

  constructor(private bugService:BugService) { }

  save(){
    this.bugArray.push(Object.assign({}, this.bug));
    console.log(this.bug.name);

    const promise = this.bugService.save(this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert('Bug is added....');
      this.bugArray.push(Object.assign({}, this.bug));
    },
    error=> {
      console.log(error);
      alert("Error occured...")
    })

  }

  ngOnInit(): void {
  }

}
