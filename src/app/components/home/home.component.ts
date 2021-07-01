import { Component, OnInit } from '@angular/core';
import { dataMixProducts } from '../carousel-multi-item/dataCarouseles.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = [];
  constructor() {
    this.data = dataMixProducts;
  }

  ngOnInit(): void {
    console.log('shop',this.data)
  }

}
