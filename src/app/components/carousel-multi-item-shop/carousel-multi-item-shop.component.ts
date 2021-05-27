import { Component, OnInit } from '@angular/core';
import {CarouselData} from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-shop',
  templateUrl: './carousel-multi-item-shop.component.html',
  styleUrls: ['./carousel-multi-item-shop.component.scss']
})
export class CarouselMultiItemShopComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:'../../assets/img/carouselOnlineShop/1.jpg',h4Data:"WTF 'Hey Yo' Stickers benja",pData:"10,00€",active:true},
    {img:"../../assets/img/carouselOnlineShop/2.jpg",h4Data: "Sweatshirt Hardcore 25th",pData:"49,00€",active:true},
    {img:"../../assets/img/carouselOnlineShop/3.jpg",h4Data: "MTN T-Shirt Basic Back Logo Black",pData:"24,90€",active:true},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../assets/img/carouselOnlineShop/4.jpg",h4Data: "MTN T-Shirt Basic Back Logo White",pData:"24,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/5.jpg",h4Data: "MTN Life Ruined my Graff T-Shirt",pData:"24,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/6.jpg",h4Data: "MTN Snapback Black Cap",pData:"34,90€",active:true},
  ]
  carouselItem2:CarouselData[]=[
    {img:"../../assets/img/carouselOnlineShop/7.jpg",h4Data: "MTN Beanie Logo Black",pData:"14,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/8.jpg",h4Data: "MTN Socks White Hardcore",pData:"8,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/9.jpg",h4Data: "MTN Socks Black Hardcore",pData:"8,90€",active:true},
  ]
  carouselItem3:CarouselData[]=[
    {img:"../../assets/img/carouselOnlineShop/10.jpg",h4Data: "MTN Socks White Metro",pData:"8,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/11.jpg",h4Data: "MTN Socks Black Metro",pData:"8,90€",active:true},
    {img:"../../assets/img/carouselOnlineShop/12.jpg",h4Data: "MTN A4 Black Book",pData:"12,00€",active:true},
  ]
  carouselItem4:CarouselData[]=[
    {img:"../../assets/img/carouselOnlineShop/13.jpg",h4Data: "MTN A4 Marker Book",pData:"20,00€",active:true},
    {img:"../../assets/img/carouselOnlineShop/14.jpg",h4Data: "MTN A5 Sketch Book",pData:"90,00€",active:true},
    {img:"../../assets/img/carouselOnlineShop/15.jpg",h4Data: "MTN A5 SketchBook / Landscape",pData:"9,00€",active:true},
  ]
  carouselItemSm:CarouselData[]=[
    {img:'../../assets/img/carouselOnlineShop/1.jpg',h4Data:"WTF 'Hey Yo' Stickers benja",pData:"10,00€",active:true},
    {img:"../../assets/img/carouselOnlineShop/2.jpg",h4Data: "Sweatshirt Hardcore 25th",pData:"49,00€",active:false},
    {img:"../../assets/img/carouselOnlineShop/3.jpg",h4Data: "MTN T-Shirt Basic Back Logo Black",pData:"24,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/4.jpg",h4Data: "MTN T-Shirt Basic Back Logo White",pData:"24,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/5.jpg",h4Data: "MTN Life Ruined my Graff T-Shirt",pData:"24,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/6.jpg",h4Data: "MTN Snapback Black Cap",pData:"34,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/7.jpg",h4Data: "MTN Beanie Logo Black",pData:"14,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/8.jpg",h4Data: "MTN Socks White Hardcore",pData:"8,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/9.jpg",h4Data: "MTN Socks Black Hardcore",pData:"8,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/10.jpg",h4Data: "MTN Socks White Metro",pData:"8,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/11.jpg",h4Data: "MTN Socks Black Metro",pData:"8,90€",active:false},
    {img:"../../assets/img/carouselOnlineShop/12.jpg",h4Data: "MTN A4 Black Book",pData:"12,00€",active:false},
    {img:"../../assets/img/carouselOnlineShop/13.jpg",h4Data: "MTN A4 Marker Book",pData:"20,00€",active:false},
    {img:"../../assets/img/carouselOnlineShop/14.jpg",h4Data: "MTN A5 Sketch Book",pData:"90,00€",active:false},
    {img:"../../assets/img/carouselOnlineShop/15.jpg",h4Data: "MTN A5 SketchBook / Landscape",pData:"9,00€",active:false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
