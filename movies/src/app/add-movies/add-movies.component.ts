import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  constructor(private ms:MovieService,private router:Router) {
    
   }
   

  ngOnInit() {
  }
  movie={
    id:'',
    rating:'',
    name:'',
    cat:''
  };

  // myForm=new FormGroup(
  //   {name:new FormControl('',[Validators.required]),
  //   rating:new FormControl('',[Validators.required]),
  //   cat:new FormControl('',[Validators.required])
  //  }
  // )

  // error_messages={
  //   'name':[{type:'required',message:'field should not be empty'}],
  //   'rating':[{type:'required',message:'field should not be empty'}],
  //   'cat':[{type:'required',message:'field should not be empty'}]

  // }

  addMovie(){
     this.ms.add(this.movie).subscribe(()=>{alert('added..')
    this.router.navigate([''])
    })
  }

}
