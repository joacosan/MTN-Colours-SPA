import { Component, OnInit } from '@angular/core';
import { Icons } from './spray';
@Component({
  selector: 'app-spray',
  templateUrl: './spray.component.html',
  styleUrls: ['./spray.component.scss']
})
export class SprayComponent implements OnInit {
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
