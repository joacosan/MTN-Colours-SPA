import { Component, OnInit } from '@angular/core';
import { Buttons } from './buttons';
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
    ];
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(button:Buttons): void {
   
  }
}