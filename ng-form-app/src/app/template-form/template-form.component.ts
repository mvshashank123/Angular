import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  username;
  password;
  skill;
  gender;
  lang1;
  lang2;
  lang3;
  skills=['java','pega','angular','node'];
  constructor(private router:Router) { }

  userdetails(){
    this.router.navigateByUrl('/success/'+this.username)
  }
  ngOnInit() {
  }

}
