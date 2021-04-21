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

  update(){

  }

  ngOnInit(): void {
  }

}
