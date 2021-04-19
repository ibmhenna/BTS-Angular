import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-searchbugform',
  templateUrl: './searchbugform.component.html',
  styleUrls: ['./searchbugform.component.css']
})
export class SearchbugformComponent implements OnInit {
title:String = 'getBug';
bug:Bug = new Bug();
bugArray: any;

  constructor(private bugService:BugService) { }

  searchBugbyName(name:any){
    this.bugService.searchBugbyName(name).subscribe(response=>
      {
        this.bugArray=[response];
        console.log(response);
      },
      error=>{
        console.log(error);
      })
  }

  ngOnInit(): void {
  }

}
