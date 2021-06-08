import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-mtn-books',
  templateUrl: './carousel-multi-item-mtn-books.component.html',
  styleUrls: ['./carousel-multi-item-mtn-books.component.scss']
})
export class CarouselMultiItemMtnBooksComponent implements OnInit {
  carouselItemSm:CarouselData[]=[
    {img:"../../../assets/img/carouselOnlineShop/13.jpg",h4Data:"MTN A4 Marker Book",pData:"",active:true},
    {img:"../../../assets/img/carouselOnlineShop/12.jpg",h4Data: "MTN A4 Black Book",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/14.jpg",h4Data: "MTN A5 Sketch Book",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/15.jpg",h4Data:"MTN A5 SketchBook / Landscape",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/16.jpg",h4Data: "MTN Note Book",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/13.jpg",h4Data: "MTN A4 Marker Book",pData:"",active:false},
  ]
  carouselItem:CarouselData[]=[
    {img:"../../../assets/img/carouselOnlineShop/13.jpg",h4Data:"MTN A4 Marker Book",pData:"",active:true},
    {img:"../../../assets/img/carouselOnlineShop/12.jpg",h4Data: "MTN A4 Black Book",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/14.jpg",h4Data: "MTN A5 Sketch Book",pData:"",active:false},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../../assets/img/carouselOnlineShop/15.jpg",h4Data:"MTN A5 SketchBook / Landscape",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/16.jpg",h4Data: "MTN Note Book",pData:"",active:false},
    {img:"../../../assets/img/carouselOnlineShop/13.jpg",h4Data: "MTN A4 Marker Book",pData:"",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
