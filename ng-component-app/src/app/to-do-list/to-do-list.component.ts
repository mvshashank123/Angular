import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tsk; 
  TaskList:any=[];
  
  addtask(){
   
    this.TaskList.push(this.tsk);
  }

  remove(i){
    var index=this.TaskList.indexOf(i);
    this.TaskList.splice(index,1);
  }
}
