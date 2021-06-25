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
  constructor(private cart: CartService) {
    cart.cartList.subscribe(c => this.cartList = c);
  }
  deleteToCart(product:Product){

  }
  ngOnInit(): void {
  }

}
