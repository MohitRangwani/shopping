import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
selectedProducts : Product[]=[];
total : Number;
  constructor(public productService : ProductService) {
    this.selectedProducts=productService.getSelectedProducts();
    this.total=productService.getTotal();
   }

  ngOnInit(): void {
  }
  onRemove(id:Number){
      this.selectedProducts= this.productService.deleteSelectedProduct(id);
 
}
}
