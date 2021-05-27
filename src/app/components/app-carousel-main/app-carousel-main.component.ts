import { Component, OnInit } from '@angular/core';
import { CarouselItem } from './carousel'
@Component({
  selector: 'app-carousel-main',
  templateUrl: './app-carousel-main.component.html',
  styleUrls: ['./app-carousel-main.component.scss']
})
export class AppCarouselMainComponent implements OnInit {
  carouselItem:CarouselItem[]=[
    {
      img:'../../../assets/img/5.jpg',
      h4Data:'Online Store',
      h1Data:'Discover our products!',
      buttonData:'SHOP NOW',
      active:true,
    },
    {
      img:'../../../assets/img/1.jpg',
      h4Data:'Mega Colours',
      h1Data:'5 new colors and caps!',
      buttonData:'GET TO KNOW THEM!',
      active:false,
    },
    {
      img:'../../../assets/img/2.jpg',
      h4Data:'MTN Water Based 300',
      h1Data:'Low impact, big results',
      buttonData:'GET TO KNOW THEM!',
      active:false,
    },
    {
      img:'../../../assets/img/3.jpg',
      h4Data:'MTN 94',
      h1Data:'The most versatile spray paint',
      buttonData:'GET TO KNOW IT!',
      active:false,
    },
    {
      img:'../../../assets/img/4.jpg',
      h4Data:'Hardcore',
      h1Data:'We’re upping the ante! 142 colors!',
      buttonData:'GET TO KNOW THEM...',
      active:false,
    },
    {
      img:'../../../assets/img/6.jpg',
      h4Data:'Hardocore 25th Anniversary',
      h1Data:'The classic "Hardocore" is back',
      buttonData:'VIEW MORE',
      active:false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
