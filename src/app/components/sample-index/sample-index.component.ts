import { Component, OnInit } from '@angular/core';
import { DataSample } from './dataSample'
@Component({
  selector: 'app-sample-index',
  templateUrl: './sample-index.component.html',
  styleUrls: ['./sample-index.component.scss']
})
export class SampleIndexComponent implements OnInit {
  dataSample:DataSample[]=[
    {img:'../../assets/img/graffiti.jpg',title:'Graffiti',},
    {img:'../../assets/img/murals.jpg',title:'Murals',},
    {img:'../../assets/img/fineArt.jpg',title:'Fine Art',},
    {img:'../../assets/img/other.jpg',title:'Others',},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
