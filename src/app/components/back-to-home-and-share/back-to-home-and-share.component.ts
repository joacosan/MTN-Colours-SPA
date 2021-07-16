import { Component, OnInit } from '@angular/core';
import { Icons } from '../back-to-home-and-share/spray';
@Component({
  selector: 'app-back-to-home-and-share',
  templateUrl: './back-to-home-and-share.component.html',
  styleUrls: ['./back-to-home-and-share.component.scss']
})
export class BackToHomeAndShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
}
