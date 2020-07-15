import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  constructor(public productService : ProductService) { 
    this.products=productService.getProducts();
  }
  onSelect(selectedProduct){
      this.productService.saveSelectedProducts(selectedProduct);
  }
  ngOnInit(): void {
  }

}
