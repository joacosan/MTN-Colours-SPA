import { Component, OnInit } from '@angular/core';
import { Icons } from './icons';
import {dataAccesories} from '../carousel-multi-item-spray/dataCarouseles.js';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
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
  data = [];
  constructor() { 
    this.data = dataAccesories;
  }

  ngOnInit(): void {
  }

}
