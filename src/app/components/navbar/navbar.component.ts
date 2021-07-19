import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , OnDestroy {
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
      nameLink:'Store',
    },
  ]
  size: number;
  constructor(private _cart: CartService) { }

  ngOnInit(): void {
    this._cart.cartList.asObservable().subscribe((changes) => {
      // console.log({changes})
      this.size = changes.length;
    })
  }
  goTo(to:string):string {
    return to === 'Markers' ? to.toLowerCase().trim() + '&refills' : to.toLowerCase().trim();
  }

  ngOnDestroy(): void {
    this._cart.cartList.unsubscribe();
  }

}
