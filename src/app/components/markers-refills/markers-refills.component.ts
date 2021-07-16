import { Component, OnInit } from '@angular/core';
import {dataMarkers} from '../carousel-multi-item/dataCarouseles.js';
@Component({
  selector: 'app-markers-refills',
  templateUrl: './markers-refills.component.html',
  styleUrls: ['./markers-refills.component.scss']
})
export class MarkersRefillsComponent implements OnInit {
  data = [];

  constructor() {
    this.data = dataMarkers;
   }

  ngOnInit(): void {
  }

}
