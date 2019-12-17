import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  langs=['java','react','angular','js','python'];
  Products:Product[]=[
       {id:1,name:'pen',price:21},
       {id:2,name:'pencil',price:8},
       {id:3,name:'watch',price:1300}    
  ]
}
