import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products=[
    {id:1,name:"apple",price:52},
    {id:2,name:"pencil",price:10},
    {id:3,name:"pen",price:18}
  ]

 product;
  selectedProduct(product){
    this.product=product;
  
  }
}
