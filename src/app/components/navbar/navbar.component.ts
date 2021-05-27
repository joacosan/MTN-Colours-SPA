import { Component, OnInit } from '@angular/core';
import {Nav} from './navbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  dataNav:Nav[]=[
    {
      nameLink: 'Spray',
      classLink:'spray'
    },
    {
      nameLink: 'Markers & Refills',
      classLink:'markers&refills'
    },
    {
      nameLink: 'Accessories',
      classLink:'accessories'
    },
    {
      nameLink: 'Distribution',
      classLink:'distribution'
    },
    {
      nameLink: 'ONLINE STORE',
      classLink:'online'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
