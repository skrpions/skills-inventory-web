import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss']
})
export class ListDevelopersComponent implements OnInit {

  public activeDevelopers: any[] = [1,2,3,4,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
