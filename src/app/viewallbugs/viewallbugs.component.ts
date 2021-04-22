import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-viewallbugs',
  templateUrl: './viewallbugs.component.html',
  styleUrls: ['./viewallbugs.component.css']
})
export class ViewallbugsComponent implements OnInit {
  title: String = 'viewallbugsform';
  bugArray: any;
  bug: Bug = new Bug();
  constructor(private bugService: BugService) { }

  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
    });
  }

}
