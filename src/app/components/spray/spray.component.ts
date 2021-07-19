import { Component, OnInit } from '@angular/core';
import { dataU } from '../carousel-multi-item/dataCarouseles.js';
@Component({
  selector: 'app-spray',
  templateUrl: './spray.component.html',
  styleUrls: ['./spray.component.scss']
})
export class SprayComponent implements OnInit {
  data = []
  constructor() {
    this.data = dataU;
    console.log(this.data);
   }

  ngOnInit(): void {
  }

}
