import { Component, OnInit } from '@angular/core';
import { CarouselData } from './carouselData';
@Component({
  selector: 'app-carousel-multi-item-caps',
  templateUrl: './carousel-multi-item-caps.component.html',
  styleUrls: ['./carousel-multi-item-caps.component.scss']
})
export class CarouselMultiItemCapsComponent implements OnInit {
  carouselItem:CarouselData[]=[
    {
      img:'../../../assets/img/carouselCaps/c21.jpg',
      h4Data:'MTN CAPS',
      pData: 'Complete MTN Cap Range',
    },
    {
      img:'../../../assets/img/carouselCaps/c22.jpg',
      h4Data:'BUCKETS',
      pData: '120 Unit Buckets',
    },
    {
      img:'../../../assets/img/carouselCaps/c23.jpg',
      h4Data:'MTN CAP PACKS',
      pData: '5 Unit Packs',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
