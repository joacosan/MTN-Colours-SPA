import { Component, OnInit } from '@angular/core';
import { Text } from './textData';
@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
  textData:Text[]=[
    {
      h1Data:'International distributors',
      h5Data:'Montana Colors Shops and Distributors',
      pData:'Here you can find the complete list of distributors of Montana Colors with links to their website and their contact emails, organized by countries and continents in alphabetical order.',
      buttonData:'International distributors',
    },
    {
      h1Data:'Montana Shops',
      h5Data:'',
      pData:'Discover all the official stores of Montana Colors: more than 20 Montana Shops spread across every populated continent. From Montreal to Tokyo via Mexico City, Cape Town and Istanbul.',
      buttonData:'Montana Shops',
    },
    {
      h1Data:'Retail Shops',
      h5Data:'',
      pData:'There are many types of stores that carry MTN products. This map will help you locate these Montana Colors outlets worldwide.',
      buttonData:'Retail Shops',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
