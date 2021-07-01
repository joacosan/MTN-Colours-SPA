import { Component, OnInit } from '@angular/core';
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
      nameLink:'Markers',
    },
    {
      nameLink:'Accessories',
    },
    {
      nameLink:'Distribution',
    },
    {
      nameLink:'STORE',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
