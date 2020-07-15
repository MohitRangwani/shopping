import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
id : Number;
products : Product[];
viewProduct : Product;

  constructor(public actRoute : ActivatedRoute , productService : ProductService) { 
    this.id=actRoute.snapshot.params.id;
    this.products=productService.getProducts();
    for(let i=0 ; i< this.products.length; i++){
        if(this.products[i].id==this.id)
        {
          this.viewProduct=this.products[i];
        }
    }
  }

  ngOnInit(): void {
  }

}
