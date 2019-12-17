import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie;
  constructor(private ms:MovieService,private router:Router) {
    ms.getAll().subscribe((res)=>this.movie=res);
   }

  ngOnInit() {
  }

}
