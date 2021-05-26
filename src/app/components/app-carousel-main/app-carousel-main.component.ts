import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-main',
  templateUrl: './app-carousel-main.component.html',
  styleUrls: ['./app-carousel-main.component.scss']
})
export class AppCarouselMainComponent implements OnInit {
  img ={
    "UrlImg1" : "../../assets/img/1.jpg",
    "UrlImg2" : "../../assets/img/2.jpg",
    "UrlImg3" : "../../assets/img/3.jpg",
    "UrlImg4" : "../../assets/img/4.jpg",
    "UrlImg5" : "../../assets/img/5.jpg",
    "UrlImg6" : "../../assets/img/6.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
