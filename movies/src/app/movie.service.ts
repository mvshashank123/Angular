import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
 
  getAll(){
    return this.http.get('http://localhost:3000/movie');
  }
  add(movie){
    let opt=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post("http://localhost:3000/movie",movie,{headers:opt});
  }
  search(){
    return this.http.get("http://localhost:3000/movie");
  }

}
