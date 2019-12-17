import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products;

  constructor(private ps:ProductService,private router:Router) {
    if(localStorage.getItem('user')==null){
      this.router.navigate([''])
    }
    ps.getAll().subscribe((res)=>this.products=res);
   }

   deleteProduct(pid){
      this.ps.delete(pid).subscribe(()=>{alert("deleted....")
    history.go()
  })
   }

   logout(){
     localStorage.clear();
     this.router.navigate([''])  
    }


  ngOnInit() {
  }

}
