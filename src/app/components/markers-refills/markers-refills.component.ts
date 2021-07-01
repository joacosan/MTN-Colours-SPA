import { Component, OnInit } from '@angular/core';
import {Icons} from './icons';
import {dataMarkers} from '../carousel-multi-item/dataCarouseles.js';
@Component({
  selector: 'app-markers-refills',
  templateUrl: './markers-refills.component.html',
  styleUrls: ['./markers-refills.component.scss']
})
export class MarkersRefillsComponent implements OnInit {
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
    this.data = dataMarkers;
   }

  ngOnInit(): void {
  }

}
