import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-appareal',
  templateUrl: './carousel-multi-item-appareal.component.html',
  styleUrls: ['./carousel-multi-item-appareal.component.scss']
})
export class CarouselMultiItemApparealComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../assets/img/carouselOnlineShop/8.jpg",h4Data:"MTN SOCKS",pData:"",active:true},
    {img:"../../../assets/img/carouselOnlineShop/bag.jpg",h4Data: "Accesories",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/4.jpg",h4Data: "T-SHIRTS",pData:"",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
