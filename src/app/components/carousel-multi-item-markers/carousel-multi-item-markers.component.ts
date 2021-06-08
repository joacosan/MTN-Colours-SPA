import { Component, OnInit } from '@angular/core';
import { CarouselData} from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-markers',
  templateUrl: './carousel-multi-item-markers.component.html',
  styleUrls: ['./carousel-multi-item-markers.component.scss']
})
export class CarouselMultiItemMarkersComponent implements OnInit {

  carouselItem:CarouselData[]=[
    {img:"../../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/1.jpg",h4Data:"Water Based Markers",pData:"6 widths - 20 Colors - Water Based",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/2.jpg",h4Data: "94 Graphic Markers",pData:"0.5 / 7 mm - 72 colors - Alcohol Based",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/3.jpg",h4Data: "Technical Markers",pData:"9 width - Black, Gold & Silver",active:true},
  ]
  carouselItem1:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/4.jpg",h4Data: "Street Paint Markers",pData:"Solvent Based Paint - 12 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/5.jpg",h4Data: "Street Ink Markers",pData:"Alcohol Based - 2 Colors",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/6.jpg",h4Data: "Pro Chalk Markers",pData:"5 mm - 10 Colors - Erasable Chalk Paint",active:true},
  ]
  carouselItemSm:CarouselData[]=[
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/1.jpg",h4Data:"Water Based Markers",pData:"6 widths - 20 Colors - Water Based",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/2.jpg",h4Data: "94 Graphic Markers",pData:"0.5 / 7 mm - 72 colors - Alcohol Based",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/3.jpg",h4Data: "Technical Markers",pData:"9 width - Black, Gold & Silver",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/4.jpg",h4Data: "Street Paint Markers",pData:"Solvent Based Paint - 12 Colors",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/5.jpg",h4Data: "Street Ink Markers",pData:"Alcohol Based - 2 Colors",active:false},
    {img:"../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/6.jpg",h4Data: "Pro Chalk Markers",pData:"5 mm - 10 Colors - Erasable Chalk Paint",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
