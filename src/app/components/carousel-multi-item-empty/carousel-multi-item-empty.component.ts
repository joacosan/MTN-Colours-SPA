import { Component, OnInit } from '@angular/core';
import { CarouselData} from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-empty',
  templateUrl: './carousel-multi-item-empty.component.html',
  styleUrls: ['./carousel-multi-item-empty.component.scss']
})
export class CarouselMultiItemEmptyComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../../assets/img/carouselMarkers&Refills/Empty/1.jpg",h4Data:"Markers",pData:"7 Different Formats",active:true},
    {img:"../../../assets/img/carouselMarkers&Refills/Empty/2.jpg",h4Data: "Dabbers",pData:"10 mm - 18 mm",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
