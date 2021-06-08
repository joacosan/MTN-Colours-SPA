import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-protection',
  templateUrl: './carousel-multi-item-protection.component.html',
  styleUrls: ['./carousel-multi-item-protection.component.scss']
})
export class CarouselMultiItemProtectionComponent implements OnInit {
  carouselItemSm:CarouselData[]=[
    {img:"../../../assets/img/accesories.html/Protection/1.jpg",h4Data:"MTN Protective Face Mask",pData:"",active:true},
    {img:"../../../assets/img/accesories.html/Protection/2.jpg",h4Data: "MTN Gel",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/3.jpg",h4Data: "MTN Pro Gloves",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/4.jpg",h4Data:"MTN Nitrile Gloves",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/5.jpg",h4Data: "MTN Ninja",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/6.jpg",h4Data: "MTN HAND CLEANER",pData:"",active:false},
  ]
  carouselItem:CarouselData[]=[
    {img:"../../../assets/img/accesories.html/Protection/1.jpg",h4Data:"MTN Protective Face Mask",pData:"",active:true},
    {img:"../../../assets/img/accesories.html/Protection/2.jpg",h4Data: "MTN Gel",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/3.jpg",h4Data: "MTN Pro Gloves",pData:"",active:false},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../../assets/img/accesories.html/Protection/4.jpg",h4Data:"MTN Nitrile Gloves",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/5.jpg",h4Data: "MTN Ninja",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/Protection/6.jpg",h4Data: "MTN HAND CLEANER",pData:"",active:false},
  ]
    constructor() { }

  ngOnInit(): void {
  }

}
