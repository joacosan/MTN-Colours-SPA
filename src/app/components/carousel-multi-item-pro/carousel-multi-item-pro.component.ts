import { Component, OnInit } from '@angular/core';
import { CarouselData} from './carouselData';
import { CarouselDataSm } from './carouselDataSm';
@Component({
  selector: 'app-carousel-multi-item-pro',
  templateUrl: './carousel-multi-item-pro.component.html',
  styleUrls: ['./carousel-multi-item-pro.component.scss']
})
export class CarouselMultiItemProComponent implements OnInit {

  carouselItem:CarouselData[]=[
    {
      img:'../../../assets/img/carouselPro/1.jpg',
      h4Data:'Color Paint',
      pData: 'MTN PRO - 400 ml - 42 Colors - Gloss',
    },
    {
      img:'../../../assets/img/carouselPro/2.jpg',
      h4Data:'Primers & Varnishes',
      pData: '',
    },
    {
      img:'../../../assets/img/carouselPro/3.jpg',
      h4Data:'Decoration & Handicrafts',
      pData: '',
    }
  ]
  carouselItem1:CarouselData[]=[
    {
      img:'../../../assets/img/carouselPro/4.jpg',
      h4Data:'Fine Arts',
      pData: 'Tools for Fine Arts',
    },
    {
      img:'../../../assets/img/carouselPro/5.jpg',
      h4Data:'Other Finishes',
      pData: '',
    },
    {
      img:'../../../assets/img/carouselPro/6.jpg',
      h4Data:'Automotive Paint',
      pData: '',
    }
  ]
  carouselItem2:CarouselData[]=[
    {
      img:'../../../assets/img/carouselPro/7.jpg',
      h4Data:'Signage - Marking',
      pData: '',
    },
    {
      img:'../../../assets/img/carouselPro/8.jpg',
      h4Data:'Industry',
      pData: 'Guaranteed Quality Results',
    },
    {
      img:'../../../assets/img/carouselPro/9.jpg',
      h4Data:'Prefills',
      pData: '',
    },
  ]
  carouselItemSm:CarouselDataSm[]=[
    {
      img:'../../../assets/img/carouselPro/1.jpg',
      h4Data:'Color Paint',
      pData: 'MTN PRO - 400 ml - 42 Colors - Gloss',
      active: true,
    },
    {
      img:'../../../assets/img/carouselPro/2.jpg',
      h4Data:'Primers & Varnishes',
      pData: '',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/3.jpg',
      h4Data:'Decoration & Handicrafts',
      pData: '',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/4.jpg',
      h4Data:'Fine Arts',
      pData: 'Tools for Fine Arts',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/5.jpg',
      h4Data:'Other Finishes',
      pData: '',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/6.jpg',
      h4Data:'Automotive Paint',
      pData: '',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/7.jpg',
      h4Data:'Signage - Marking',
      pData: '',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/8.jpg',
      h4Data:'Industry',
      pData: 'Guaranteed Quality Results',
      active:false,
    },
    {
      img:'../../../assets/img/carouselPro/9.jpg',
      h4Data:'Prefills',
      pData: '',
      active:false,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
