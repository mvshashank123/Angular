import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-calc',
  templateUrl: './pr-calc.component.html',
  styleUrls: ['./pr-calc.component.css']
})
export class PrCalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

Category=['Electronics','Grocery'];
Electronics=['Television','Laptop','Phone'];
Grocery=['Soap', 'Powder'];
qty;
res;
submit(){
this.res=this.qty;
}
clear(){
  this.res=0;
}
}
