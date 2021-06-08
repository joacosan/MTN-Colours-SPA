import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-special',
  templateUrl: './carousel-multi-item-special.component.html',
  styleUrls: ['./carousel-multi-item-special.component.scss']
})
export class CarouselMultiItemSpecialComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {img:"../../../assets/img/accesories.html/MTN Books&SpecialColection/1.jpg",h4Data:"MTN X GARAGE BEER CO.",pData:"",active:true},
    {img:"../../../assets/img/carouselGraffiti&FineArt/c5.jpg",h4Data: "HARDCORE 25TH ANNIVERSARY",pData:"",active:false},
    {img:"../../../assets/img/accesories.html/MTN Books&SpecialColection/2.jpg",h4Data: "25TH ANNIVERSARY",pData:"",active:false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
