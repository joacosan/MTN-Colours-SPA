import { Component, OnInit } from '@angular/core';
import {News} from './news';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  card :News[]=[
    {
      img: '../../../assets/img/news1.jpg',
      h4Data:'',
      spanData:'How To',
      pData:"Don't miss the Montana Colors tutorials to get more out the products!",
      buttonData:'VIEW'
    },
    {
      img: '../../../assets/img/news2.jpg',
      h4Data:'Discover ine shop!',
      spanData:'our onl',
      pData:"Don't miss the Montana Colors tutorials to get more out the products!",
      buttonData:'VIEW'
    }
  ]
  card1: News[]=[
    {
      img: '../../../assets/img/news3.jpg',
      h4Data:'MTN NEWS',
      spanData:'',
      pData:"News,projects and events related to Montana Colors.",
      buttonData:'GO TO MTN NEWS'
    },
    {
      img: '../../../assets/img/news4.jpg',
      h4Data:'DISCOVER OUR SHOPS',
      spanData:'our onl',
      pData:"Discover all the Montana Shops worldwide and where to find our products wherever you go.",
      buttonData:'POINTS OF SALE'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
