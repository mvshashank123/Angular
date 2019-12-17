import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    cost:new FormControl('',[Validators.required]),
    online:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    store:new FormControl('',[Validators.required])

  })
  id1;
  name1;
  cost1;
  online1;
  category1;
  store1;

  onSubmit(){
    console.log(this.id1+' '+this.name1+" "+this.cost1+" "+this.online1+" "+this.category1+" "+this.store1);
  }

  error_messages={
    'id':[
      {type:'required',message:'field should not be empty'}
    ],
    'name':[
      {type:'required',message:'enter a name'}
    ],
    'cost':[
      {type:'required',message:'enter the cost'}
    ],
    'online':[
      {type:'required',message:'Select type'}
    ],
    'category':[
      {type:'required',message:'Select category'}
    ],
    'store':[
      {type:'required',message:'Select a value'}
    ],

  }
  

}
