import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  myForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    langs:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    terms:new FormControl('',Validators.requiredTrue)
  })

  error_messages={
    'username':[
      {type:'required',message:'field should not be empty'}
    ],
    'password':[
      {type:'required',message:'password should not be empty'}
    ],
    'email':[
      {type:'required',message:'enter an email address'}
    ],
    'langs':[
      {type:'required',message:"select an option"}
    ],
    'gender':[
      {type:'required',message:"select a gender"}
    ],
    'terms':[
      {type:'required',message:"agree the terms"}
    ]
  }

}
