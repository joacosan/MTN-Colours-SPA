import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-merchandise',
  templateUrl: './carousel-multi-item-merchandise.component.html',
  styleUrls: ['./carousel-multi-item-merchandise.component.scss']
})
export class CarouselMultiItemMerchandiseComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../assets/img/accesories.html/Merchandise/1.jpg",h4Data:"MTN Tool Belt",pData:"",active:true},
    {img:"../../../assets/img/accesories.html/Merchandise/2.jpg",h4Data: "MTN Swatchbooks",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/3.jpg",h4Data: "MTN Box",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/4.jpg",h4Data:"MTN Metal Enamel Mug",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/5.jpg",h4Data: "MTN Water Bottle",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/6.jpg",h4Data: "MTN Systems",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/7.jpg",h4Data:"MTN Stickers",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/8.jpg",h4Data: "MTN Pandora",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Merchandise/9.jpg",h4Data: "Wall To Wall",pData:"",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
