import { Component, OnInit } from '@angular/core';
import {Icons} from './icons'
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

  constructor() { }

  ngOnInit(): void {
  }

}
