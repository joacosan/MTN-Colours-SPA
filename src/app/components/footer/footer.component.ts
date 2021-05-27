import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  imgPublicidad:any[]=[
    {img:"../../../assets/img/footer/mtnworldlogo.svg"},
    {img:"../../../assets/img/footer/keeptheplanet.svg"},
    {img:"../../../assets/img/footer/tramontana.svg"}
  ]
  column1:any[]=[
    {a:"MONTANA COLORS"},
    {a:"SELLING POINTS"},
    {a:"R+D"},
    {a:"TRAMONTANA MAGAZINE"},
    {a:"DELIVERY AND SHIPMENT"}
  ]
  column2:any[]=[
    {a:"KEEP D PLANET"},
    {a:"DOCUMENTATION"},
    {a:"INFORMATION"},
    {a:"COOKIES POLICY"},
    {a:"CONTACT"}
  ]
  column3:any[]=[
    {pTop:"ONLINE SALE INDIVIDUALS",a:"SPRAYPLANET.ES",pBottom:"Exclusively for Spain and Portugal"},
    {pTop:"ACCESS TO OUR PRO SITE",a:"MTN B2B > ",pBottom:"Reseller information"},
  ]
  imgPagos:any[]=[
    {img:"../../../assets/img/footer/apay.svg"},
    {img:"../../../assets/img/footer/mastercard.svg"},
    {img:"../../../assets/img/footer/maestro.svg"},
    {img:"../../../assets/img/footer/americanexpress.svg"},
    {img:"../../../assets/img/footer/visa.svg"},
    {img:"../../../assets/img/footer/paypal.svg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
