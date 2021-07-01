import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-multi-item-markers',
  templateUrl: './carousel-multi-item-markers.component.html',
  styleUrls: ['./carousel-multi-item-markers.component.scss']
})
export class CarouselMultiItemMarkersComponent implements OnInit {
  @Input() dataM:any;

  constructor() { }
  ngOnInit(): void {
    console.log(this.dataM)
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
