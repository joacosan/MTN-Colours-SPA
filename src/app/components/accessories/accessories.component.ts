import { Component, OnInit } from '@angular/core';
import {dataAccesories} from '../carousel-multi-item/dataCarouseles.js';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  data = [];
  constructor() {
    this.data = dataAccesories;
  }

  ngOnInit(): void {
  }

}
