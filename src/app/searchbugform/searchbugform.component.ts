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

  }
  }
