import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-my-show',
  templateUrl: './book-my-show.component.html',
  styleUrls: ['./book-my-show.component.css']
})
export class BookMyShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tcost;
  tickets;
  cost=150;

  total(){
    this.tcost=this.cost*this.tickets;
  }
}
