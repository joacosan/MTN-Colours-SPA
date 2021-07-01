import { Component,Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-multi-item-accesories',
  templateUrl: './carousel-multi-item-accesories.component.html',
  styleUrls: ['./carousel-multi-item-accesories.component.scss']
})
export class CarouselMultiItemAccesoriesComponent implements OnInit {
  @Input() dataA:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataA)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
