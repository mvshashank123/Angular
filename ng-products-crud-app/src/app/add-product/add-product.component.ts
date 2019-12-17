import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService,private router:Router) { }

  ngOnInit() {
  }
  product={
    name:'',
    price:''
  }
  addProduct(){
    this.ps.add(this.product).subscribe(()=>{
      alert("added")
      this.router.navigate([''])
  })
    
  }

}
