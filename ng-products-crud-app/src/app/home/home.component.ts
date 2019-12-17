import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  product;
  pid;
  
  
  constructor(private ps:ProductService,private router:Router) {
    ps.getAll().subscribe((res)=>this.product=res);
   }

   deleteProduct(pid){
     this.ps.delete(pid).subscribe(()=>{alert("deleted...")
    history.go()
    });
   }

  ngOnInit() {
  }

}
