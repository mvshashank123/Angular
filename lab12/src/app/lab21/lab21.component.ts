import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lab21',
  templateUrl: './lab21.component.html',
  styleUrls: ['./lab21.component.css']
})
export class Lab21Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id;
  name;
  dept;
  salary;
  emp=[

  ]
  d=new Date();

  addEmp(){
     this.emp.push({empId:this.id,empName:this.name,empSalary:this.salary,empDept:this.dept});
  }

  delete(e1){
    
    this.emp.splice(e1,1);
  }
}
