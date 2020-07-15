import { Product } from './product.model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductService{
    product1 : Product;
    product2: Product;
    product3 : Product;
    products =[];
    selectedProducts=[];
    
    constructor(){
        this.product1=new Product( 1,'Product 1' , 9000 , 'Product 1 description');
        this.product2=new Product( 2,'Product 2' , 3000 , 'Product 2 description');
        this.product3=new Product( 3,'Product 3' , 7000 ,'Product 3 description');
        this.products.push(this.product1);
        this.products.push(this.product2);
        this.products.push(this.product3);
    }
    getProducts() : Product[] {
        return this.products;
    }
    saveSelectedProducts(selectedProduct : Product) : void{
        this.selectedProducts.push(selectedProduct);
        console.log(this.selectedProducts);
    }
    getSelectedProducts() : Product[]{
        return this.selectedProducts;
        
    }
    getTotal() : Number{
       let total=0;
        for(let i=0 ; i< this.selectedProducts.length; i++){
         total=total+this.selectedProducts[i].price;  
        }
        return total;
    }
   deleteSelectedProduct(id : Number) : Product[]{
       
        for(let i=0; i<this.selectedProducts.length;i++){
            
            if(this.selectedProducts[i].id==id){
              this.selectedProducts.splice(i , 1);
              break;
                    }                
    }
    return this.selectedProducts;
}
}