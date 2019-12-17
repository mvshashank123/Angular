import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  constructor(private ms:MovieService,private router:Router) { }

  
  sMovie;
  category;
  searchMovie(){
    this.ms.search().subscribe((res)=>this.sMovie=res);
  }

  ngOnInit() {
  }


}
