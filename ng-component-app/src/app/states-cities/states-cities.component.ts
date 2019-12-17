import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-cities',
  templateUrl: './states-cities.component.html',
  styleUrls: ['./states-cities.component.css']
})
export class StatesCitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  states=['Tamil Nadu','Karnataka','Telangana'];

  tn=['Chennai','Chengalpattu','Kancheepuram']

  ka=['Bangalore','Mysore','Belgaum']

  tl=['Hyderabad','Warangal']
}
