import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from '../spray-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList:Product[] = [];
  total: number= 0;
  constructor(private cart: CartService) {

    cart.cartList.subscribe(c => this.cartList = c);
  }

  deleteToCart(product:Product){
    const newArray = this.cartList.filter(v => v !== product);
    this.cartList = newArray;
    this.total =  this.total - (product.price * product.quantity);
  }
  productsTotal(cartList: Product[], product: any) {
    for(let i=0; i < cartList.length;i++){
      this.total += (cartList[i].price * cartList[i].quantity)
    }
  }
  ngOnInit(): void {
    this.productsTotal(this.cartList, product);
  }

}


function product(cartList: Product[], product: any) {
  throw new Error('Function not implemented.');
}

