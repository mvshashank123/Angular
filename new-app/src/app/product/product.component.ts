import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  username: string="shashank"
  age: number=21
  langs=['java','angular','react','vue','js']
  products=[
    {id:1,name:'apple',price:49},
    {id:2,name:'pencil',price:10},
    {id:3,name:'pen',price:20}
  ]

  display(){
    alert("hi, this is display method")
  }
}
