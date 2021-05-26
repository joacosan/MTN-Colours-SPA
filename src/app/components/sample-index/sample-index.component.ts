import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-index',
  templateUrl: './sample-index.component.html',
  styleUrls: ['./sample-index.component.scss']
})
export class SampleIndexComponent implements OnInit {
  url ={
    "img1": "../../assets/img/graffiti.jpg",
    "img2": "../../assets/img/murals.jpg",
    "img3": "../../assets/img/fineArt.jpg",
    "img4": "../../assets/img/other.jpg"
  }
  title={
    "graffiti":"Graffiti",
    "murals":"Murals",
    "fineArt":"Fine Art",
    "other":"Others"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
