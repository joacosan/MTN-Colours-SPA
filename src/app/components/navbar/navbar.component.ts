import { Component, OnInit } from '@angular/core';
import {Nav} from './navbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dataLink:any[]=[
    {
      nameLink:'Spray',
    },
    {
      nameLink:'Markers & Refills',
    },
    {
      nameLink:'Accessories',
    },
    {
      nameLink:'Distribution',
    },
    {
      nameLink:'ONLINE STORE',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
