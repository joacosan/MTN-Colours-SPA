import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
import { CarouselDataSm } from './carouselDataSm';
@Component({
  selector: 'app-carousel-multi-item-graffiti',
  templateUrl: './carousel-multi-item-graffiti.component.html',
  styleUrls: ['./carousel-multi-item-graffiti.component.scss']
})
export class CarouselMultiItemGraffitiComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c4.jpg',
      h4Data:'WATER BASED',
      pData:'300 ml - 20 Colors - Gloss',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c9.jpg',
      h4Data:'MAXIMO',
      pData:'750 ml - 8 Colors - Gloss',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c10.jpg',
      h4Data:'MEGA',
      pData:'600 ml - 15 Colors - Chrome',
    },
  ]
  carouselItem1:CarouselData[]=[
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c2.jpg',
      h4Data:'TNT',
      pData:'400 ml-Black-Matt',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c5.jpg',
      h4Data:'HARDCORE 25TH ANNIVERSARY',
      pData:'Special Edition - 6 Colors',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c6.jpg',
      h4Data:'MTN 94',
      pData:'400 ml - 217 Colors - Matt',
    },
  ]
  carouselItem2:CarouselData[]=[
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c8.jpg',
      h4Data:'HARDCORE',
      pData:'400 ml - 142 Colors - Gloss',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c3.jpg',
      h4Data:'Pocket',
      pData:'150 ml - 6 Colors - Matt',
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c3.png',
      h4Data:'MAD MAXXX',
      pData:'750 ml - 8 Colors - Gloss',
    },
  ]
  carouselItemSm:CarouselDataSm[]=[
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c4.jpg',
      h4Data:'WATER BASED',
      pData:'300 ml - 20 Colors - Gloss',
      active:true,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c9.jpg',
      h4Data:'MAXIMO',
      pData:'750 ml - 8 Colors - Gloss',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c10.jpg',
      h4Data:'MEGA',
      pData:'600 ml - 15 Colors - Chrome',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c2.jpg',
      h4Data:'TNT',
      pData:'400 ml-Black-Matt',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c5.jpg',
      h4Data:'HARDCORE 25TH ANNIVERSARY',
      pData:'Special Edition - 6 Colors',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c6.jpg',
      h4Data:'MTN 94',
      pData:'400 ml - 217 Colors - Matt',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c8.jpg',
      h4Data:'HARDCORE',
      pData:'400 ml - 142 Colors - Gloss',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c3.jpg',
      h4Data:'Pocket',
      pData:'150 ml - 6 Colors - Matt',
      active:false,
    },
    {
      img:'../../assets/img/carouselGraffiti&FineArt/c3.png',
      h4Data:'MAD MAXXX',
      pData:'750 ml - 8 Colors - Gloss',
      active:false,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
