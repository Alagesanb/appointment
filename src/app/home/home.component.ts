import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tabs = [
    { title: 'Queue', content: 'First Tab Content' ,customClass: 'customClass',active: true},
    { title: 'Earlier', content: 'Second Tab Content',customClass: 'customClass' },
    { title: 'Wait List', content: 'Third Tab Content',customClass: 'customClass' },
    { title: 'No Show', content: 'Fourth Tab Content',customClass: 'customClass'}
 ];


  ngOnInit() {
  }

}
