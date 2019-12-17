import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  username;
  constructor(private route:ActivatedRoute) { 
    route.params.subscribe((parameters)=>this.username=parameters['user'])
  }

  ngOnInit() {
  }

}
