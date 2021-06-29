import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import {Product} from './product'
@Component({
  selector: 'app-spray-list',
  templateUrl: './spray-list.component.html',
  styleUrls: ['./spray-list.component.scss']
})
export class SprayListComponent implements OnInit {

  constructor(private cart: CartService) {

   }

  ngOnInit(): void {
  }

  list:Product[]=[
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c4.jpg',
      name: 'Water Based',
      type: 'Spray',
      price: 3.00,
      stock: 300,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c9.jpg',
      name: 'MAXIMO',
      type: 'Spray',
      price: 4.00,
      stock: 500,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c10.jpg',
      name: 'MEGA',
      type: 'Spray',
      price: 3.50,
      stock: 500,
      clearance: true,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c2.jpg',
      name: 'TNT',
      type: 'Spray',
      price: 3.50,
      stock: 300,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c5.jpg',
      name: 'HARDCORE 25°',
      type: 'Spray',
      price: 7.00,
      stock: 0,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c6.jpg',
      name: 'MTN 94',
      type: 'Spray',
      price: 4.50,
      stock: 600,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c8.jpg',
      name: 'HARDCORE',
      type: 'Spray',
      price: 4.50,
      stock: 600,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c3.jpg',
      name: 'POCKET',
      type: 'Spray',
      price: 2.50,
      stock: 300,
      clearance: false,
      quantity:0,
    },
    {
      img: '../../../assets/img/carouselGraffiti&FineArt/c3.png',
      name: 'MAD MAXXX',
      type: 'Spray',
      price: 8.50,
      stock: 500,
      clearance: false,
      quantity:0,
    },
  ]
  addToCart(list:Product):void {
    this.cart.addToCart(list);
    list.stock -= list.quantity;
    list.quantity = 0;//se reinicia a 0 para la siguiente compra. (habria que charlarlo con el cliente)
  }
  maxReached(m:string){
    alert(m);
  }
}
