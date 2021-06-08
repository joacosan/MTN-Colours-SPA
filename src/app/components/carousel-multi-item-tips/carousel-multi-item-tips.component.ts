import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-tips',
  templateUrl: './carousel-multi-item-tips.component.html',
  styleUrls: ['./carousel-multi-item-tips.component.scss']
})
export class CarouselMultiItemTipsComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../../assets/img/carouselMarkers&Refills/Tips/1.jpg",h4Data:"MARKERS",pData:"",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Tips/2.jpg",h4Data: "DABBER TIPS",pData:"",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Tips/3.jpg",h4Data: "94 Graphic Markers Tips",pData:"",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
