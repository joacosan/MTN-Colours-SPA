import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-packs',
  templateUrl: './carousel-multi-item-packs.component.html',
  styleUrls: ['./carousel-multi-item-packs.component.scss']
})
export class CarouselMultiItemPacksComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../../assets/img/carouselMarkers&Refills/Packs/1.jpg",h4Data:"Water Based Markers",pData:"6 Different Packs",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/2.jpg",h4Data: "94 Graphic Markers",pData:"6 Different Packs",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/3.jpg",h4Data: "Technical Markers Packs",pData:"2 Different Packs",active:true},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/4.jpg",h4Data: "Pro Chalk Markers",pData:"",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/1.jpg",h4Data: "Water Based Markers",pData:"6 Different Packs",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/2.jpg",h4Data: "Pro Chalk Markers",pData:"6 Different Packs",active:true},
  ]
  carouselItemSm:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/1.jpg",h4Data:"Water Based Markers",pData:"6 Different Packs",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/2.jpg",h4Data: "94 Graphic Markers",pData:"6 Different Packs",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/3.jpg",h4Data: "Technical Markers Packs",pData:"2 Different Packs",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/4.jpg",h4Data: "Pro Chalk Markers",pData:"",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/1.jpg",h4Data: "Water Based Markers",pData:"6 Different Packs",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Packs/2.jpg",h4Data: "94 Graphic Markers",pData:"6 Different Packs",active:false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
