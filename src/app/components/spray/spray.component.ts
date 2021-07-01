import { Component, OnInit } from '@angular/core';
import { Icons } from './spray';
import {dataU} from '../carousel-multi-item-spray/dataCarouseles.js';
@Component({
  selector: 'app-spray',
  templateUrl: './spray.component.html',
  styleUrls: ['./spray.component.scss']
})
export class SprayComponent implements OnInit {
  icons:Icons[] = [
    {
      icon: '../../../assets/img/facebook.svg',
    },
    {
      icon:'../../../assets/img/twitter.svg',
    },
    {
      icon: '../../../assets/img/envelope.svg',
    },
    {
     icon: '../../../assets/img/in.svg',
    }
  ]
  data = []
  constructor() {
    this.data = dataU;
    console.log(this.data);
   }

  ngOnInit(): void {
  }

}
