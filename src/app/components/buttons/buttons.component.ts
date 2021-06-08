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
  isShowGraf:boolean =true;
  isShowCaps:boolean =false;
  isShowPro:boolean =false;
  isShowLE:boolean =false;
  showGraffiti(): void {
   this.isShowGraf = !this.isShowGraf;
   if(this.isShowCaps === true || this.isShowPro === true || this.isShowLE === true){
     this.isShowCaps = false;
     this.isShowPro = false;
     this.isShowLE = false;
   }
  }
  showCaps(): void {
    this.isShowCaps = !this.isShowCaps;
    if(this.isShowGraf === true || this.isShowPro === true || this.isShowLE === true){
      this.isShowGraf = false;
      this.isShowPro = false;
      this.isShowLE = false;
    }
   }
   showPro(): void {
    this.isShowPro = !this.isShowPro;
    if(this.isShowGraf === true || this.isShowCaps === true || this.isShowLE === true){
      this.isShowGraf = false;
      this.isShowCaps = false;
      this.isShowLE = false;
    }
   }
   showLE(): void {
    this.isShowLE =!this.isShowLE;
    if(this.isShowGraf === true || this.isShowCaps === true || this.isShowPro === true){
      this.isShowGraf = false;
      this.isShowCaps = false;
      this.isShowPro = false;
    }
   }
}