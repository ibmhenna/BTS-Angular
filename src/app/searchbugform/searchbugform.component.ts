import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-searchbugform',
  templateUrl: './searchbugform.component.html',
  styleUrls: ['./searchbugform.component.css']
})
export class SearchbugformComponent implements OnInit {
title:String = 'Searchbugform';
bug:Bug = new Bug();
bugArray: any;

  constructor(private bugService:BugService) { }

  deleteBug(id : any , index : number){
    const observable = this.bugService.delete(id);
    observable.subscribe(response=>this.bugArray.splice(index,1))
  }


  searchBugbyName(name:any){
    console.log(this.bug.name);
    const observable = this.bugService.searchBugbyName(this.bug.name);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=[response];
        console.log("success");
      },
      error=>{
        console.log(error);
        alert("error");
      })
  }

  searchBugbyStatus(status:any){
    const observable = this.bugService.searchBugbyStatus(status);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=response;
        console.log("success");
      },
      error=>{
        console.log(error);
        alert("error");
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
