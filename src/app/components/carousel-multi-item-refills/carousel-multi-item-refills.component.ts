import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-refills',
  templateUrl: './carousel-multi-item-refills.component.html',
  styleUrls: ['./carousel-multi-item-refills.component.scss']
})
export class CarouselMultiItemRefillsComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data:"Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/3.jpg",h4Data: "Street Ink Refills",pData:"2 Colors - 200 ml - Alcohol Base",active:true},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/4.jpg",h4Data: "MTN Liquid",pData:"200 ml - Acrylic Paint - 3 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data: "Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:true},
  ]
  carouselItemSm:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data:"Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/3.jpg",h4Data: "Street Ink Refills",pData:"2 Colors - 200 ml - Alcohol Base",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/4.jpg",h4Data: "MTN Liquid",pData:"200 ml - Acrylic Paint - 3 Colors",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/1.jpg",h4Data: "Water Based Paint Refills",pData:"200 ml - Water Based - 20 Colors",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/Refills/2.jpg",h4Data: "Street Paint Refills",pData:"200 ml - Solvent Paint - 11 Colors",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
