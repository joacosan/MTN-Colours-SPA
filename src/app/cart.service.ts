import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './components/spray-list/product';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private _cartList: Product[]= [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(product: Product) {
   let item:Product = this._cartList.find((v1)=>v1.name == product.name);
   if(!item){
    this._cartList.push( {... product} );
   }else{
    item.quantity += product.quantity;
   }
   console.log(this._cartList)
   this.cartList.next(this._cartList);//equivalente al emmit
  }
}