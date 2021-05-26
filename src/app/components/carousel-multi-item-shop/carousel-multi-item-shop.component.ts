import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-multi-item-shop',
  templateUrl: './carousel-multi-item-shop.component.html',
  styleUrls: ['./carousel-multi-item-shop.component.scss']
})
export class CarouselMultiItemShopComponent implements OnInit {
  active={
    "img":"../../assets/img/carouselOnlineShop/1.jpg",
    "h4":"dsafa",
    "p": "sdafa"
  }
  dataCarouselMultiItemActive: any[]=[
    {img:"../../assets/img/carouselOnlineShop/1.jpg",h4: "WTF 'Hey Yo' Stickers benja",p:"10,00€"},
    {img:"../../assets/img/carouselOnlineShop/2.jpg",h4: "Sweatshirt Hardcore 25th",p:"49,00€"},
    {img:"../../assets/img/carouselOnlineShop/3.jpg",h4: "MTN T-Shirt Basic Back Logo Black",p:"24,90€"}
  ]
  dataCarouselMultiItem1:any[]=[
    {img:"../../assets/img/carouselOnlineShop/4.jpg",h4: "MTN T-Shirt Basic Back Logo White",p:"24,90€"},
    {img:"../../assets/img/carouselOnlineShop/5.jpg",h4: "MTN Life Ruined my Graff T-Shirt",p:"24,90€"},
    {img:"../../assets/img/carouselOnlineShop/6.jpg",h4: "MTN Snapback Black Cap",p:"34,90€"},
  ]
  dataCarouselMultiItem2:any[]=[
    {img:"../../assets/img/carouselOnlineShop/7.jpg",h4: "MTN Beanie Logo Black",p:"14,90€"},
    {img:"../../assets/img/carouselOnlineShop/8.jpg",h4: "MTN Socks White Hardcore",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/9.jpg",h4: "MTN Socks Black Hardcore",p:"8,90€"},
  ]
  dataCarouselMultiItem3:any[]=[
    {img:"../../assets/img/carouselOnlineShop/10.jpg",h4: "MTN Socks White Metro",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/11.jpg",h4: "MTN Socks Black Metro",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/12.jpg",h4: "MTN A4 Black Book",p:"12,00€"},
  ]
  dataCarouselMultiItem4:any[]=[
    {img:"../../assets/img/carouselOnlineShop/13.jpg",h4: "MTN A4 Marker Book",p:"20,00€"},
    {img:"../../assets/img/carouselOnlineShop/14.jpg",h4: "MTN A5 Sketch Book",p:"90,00€"},
    {img:"../../assets/img/carouselOnlineShop/15.jpg",h4: "MTN A5 SketchBook / Landscape",p:"9,00€"}
  ]
  dataCarouselSM: any[]= [
    {img:"../../assets/img/carouselOnlineShop/1.jpg",h4: "WTF 'Hey Yo' Stickers benja",p:"10,00€"},
    {img:"../../assets/img/carouselOnlineShop/2.jpg",h4: "Sweatshirt Hardcore 25th",p:"49,00€"},
    {img:"../../assets/img/carouselOnlineShop/3.jpg",h4: "MTN T-Shirt Basic Back Logo Black",p:"24,90€"},
    {img:"../../assets/img/carouselOnlineShop/4.jpg",h4: "MTN T-Shirt Basic Back Logo White",p:"24,90€"},
    {img:"../../assets/img/carouselOnlineShop/5.jpg",h4: "MTN Life Ruined my Graff T-Shirt",p:"24,90€"},
    {img:"../../assets/img/carouselOnlineShop/6.jpg",h4: "MTN Snapback Black Cap",p:"34,90€"},
    {img:"../../assets/img/carouselOnlineShop/7.jpg",h4: "MTN Beanie Logo Black",p:"14,90€"},
    {img:"../../assets/img/carouselOnlineShop/8.jpg",h4: "MTN Socks White Hardcore",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/9.jpg",h4: "MTN Socks Black Hardcore",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/10.jpg",h4: "MTN Socks White Metro",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/11.jpg",h4: "MTN Socks Black Metro",p:"8,90€"},
    {img:"../../assets/img/carouselOnlineShop/12.jpg",h4: "MTN A4 Black Book",p:"12,00€"},
    {img:"../../assets/img/carouselOnlineShop/13.jpg",h4: "MTN A4 Marker Book",p:"20,00€"},
    {img:"../../assets/img/carouselOnlineShop/14.jpg",h4: "MTN A5 Sketch Book",p:"90,00€"},
    {img:"../../assets/img/carouselOnlineShop/15.jpg",h4: "MTN A5 SketchBook / Landscape",p:"9,00€"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
