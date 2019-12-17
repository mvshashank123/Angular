import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname;
  pword;

  constructor(private router:Router) { }

  login(){
    if(this.uname=='shashank' && this.pword=='123'){
      localStorage.setItem('user',this.uname)
      localStorage.setItem('role','admin')
      this.router.navigate(['home'])
    }
    else{
      localStorage.setItem('user',this.uname)
      localStorage.setItem('role','customer')
      this.router.navigate(['home'])
    }
  }

  ngOnInit() {
  }

}
