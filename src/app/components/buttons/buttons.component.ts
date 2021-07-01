import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Buttons } from './buttons';
import {dataU, getDataById} from '../carousel-multi-item/dataCarouseles.js';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  buttons: Buttons[] = [
     {  btn: 'Graffiti & Fine Art',
        active:true,
    },
    {
      btn:'Caps',
      active:false,
    },
    {
      btn:'PRO',
      active:false,
    },
    {
      btn:'Limited Edition',
      active:false,
    }
    ];//yo lo traigo desde aca pero estan todos juntos mira estos son todos juntos
    data = []
  constructor() {
    this.data = dataU;
   }

  ngOnInit(): void {
    console.log('dataU',this.data[0].data)
    
  }
  showData(ev): void {
    this.data = getDataById(ev.target.innerText);
    console.log(this.data)
  }
}