import { Component, Input, OnInit } from '@angular/core';
import {dataU } from './dataCarouseles.js'
@Component({
  selector: 'app-carousel-multi-item',
  templateUrl: './carousel-multi-item.component.html',
  styleUrls: ['./carousel-multi-item.component.scss']
})
export class CarouselMultiItemComponent implements OnInit {
  @Input() data:any;

    constructor() {
   }

  ngOnInit(): void {
    console.log('data', this.data);
  }
}
