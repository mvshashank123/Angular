import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-product-calculator',
  templateUrl: './product-calculator.component.html',
  styleUrls: ['./product-calculator.component.css']
})
export class ProductCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  li=['Electronics','Grocery'];
  ec=[{id:'Television',pr:20000},{id:'Laptop',pr:30000},{id:'Phone',pr:10000}]
  gr=[{id:'Soap',pr:40},{id:'Powder',pr:90}]

  qty;
  price;
  res;

  calc(){
     this.res=this.price*this.qty;
  }

}
