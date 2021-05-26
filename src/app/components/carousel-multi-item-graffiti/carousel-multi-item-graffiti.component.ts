import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-multi-item-graffiti',
  templateUrl: './carousel-multi-item-graffiti.component.html',
  styleUrls: ['./carousel-multi-item-graffiti.component.scss']
})
export class CarouselMultiItemGraffitiComponent implements OnInit {
  url ={
    "img":  "../../assets/img/carouselGraffiti&FineArt/c4.jpg",
    "img1": "../../assets/img/carouselGraffiti&FineArt/c9.jpg",
    "img2": "../../assets/img/carouselGraffiti&FineArt/c10.jpg",
    "img3": "../../assets/img/carouselGraffiti&FineArt/c2.jpg",
    "img4": "../../assets/img/carouselGraffiti&FineArt/c5.jpg",
    "img5": "../../assets/img/carouselGraffiti&FineArt/c6.jpg",
    "img6": "../../assets/img/carouselGraffiti&FineArt/c8.jpg",
    "img7": "../../assets/img/carouselGraffiti&FineArt/c3.jpg",
    "img8": "../../assets/img/carouselGraffiti&FineArt/c3.png"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
