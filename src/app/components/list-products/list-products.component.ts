import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import {MatTableDataSource} from '@angular/material/table';

export interface Product {
  img:string;
  name:string;
  type:string;
  price:number;
  stock:number;
  clearance:boolean;
  quantity:number;
}
const ELEMENT_DATA: Product[] = [
  {img: '../../../assets/img/carouselGraffiti&FineArt/c4.jpg',name: 'Water Based',type: 'Spray',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c9.jpg',name: 'MAXIMO',type: 'Spray',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c10.jpg',name: 'MEGA',type: 'Spray',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c2.jpg',name: 'TNT',type: 'Spray',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c5.jpg',name: 'HARDCORE 25°',type: 'Spray',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c6.jpg',name: 'MTN 94',type: 'Spray',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c8.jpg',name: 'HARDCORE',type: 'Spray',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c3.jpg',name: 'POCKET',type: 'Spray',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img: '../../../assets/img/carouselGraffiti&FineArt/c3.png',name: 'MAD MAXXX',type: 'Spray',price: 8.50,stock: 500,clearance: false,quantity:0,},

  {img:'../../../assets/img/carouselCaps/c21.jpg',name:'MTN CAPS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},
  {img:'../../../assets/img/carouselCaps/c22.jpg',name:'BUCKETS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},
  {img:'../../../assets/img/carouselCaps/c23.jpg',name:'MTN CAP PACKS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},
  {img:'../../../assets/img/carouselCaps/c21.jpg',name:'MTN CAPS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},
  {img:'../../../assets/img/carouselCaps/c22.jpg',name:'BUCKETS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},
  {img:'../../../assets/img/carouselCaps/c23.jpg',name:'MTN CAP PACKS',type:'Caps',price:5.00,stock:200,clearance:false,quantity:0},

  {img:'../../../assets/img/carouselPro/1.jpg',name: 'Color Paint',type: 'pro',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/2.jpg',name: 'Primers & Varnishes',type: 'pro',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/3.jpg',name: 'Decoration & Handicrafts',type: 'pro',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselPro/4.jpg',name: 'Fine Art',type: 'pro',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/5.jpg',name: 'Other Finishes',type: 'pro',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/6.jpg',name: 'Automotive Paint',type: 'pro',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/7.jpg',name: 'Signage - Marking',type: 'pro',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/8.jpg',name: 'Industry',type: 'pro',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselPro/9.jpg',name: 'Prefills',type: 'pro',price: 8.50,stock: 500,clearance: false,quantity:0,},

  {img:'../../../assets/img/carouselLimitedEdition/1.jpg',name: 'ESTEVAN ORIOL',type: 'Limited Edition',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/2.jpg',name: 'CEKIOS',type: 'Limited Edition',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/3.jpg',name: 'SATONE',type: 'Limited Edition',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/4.jpg',name: 'FAKSO',type: 'Limited Edition',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/5.jpg',name: 'JULIONE',type: 'Limited Edition',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/6.jpg',name: 'MECRO',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/7.jpg',name: 'ROSY ONE',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/8.jpg',name: 'HENSE',type: 'Limited Edition',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/9.jpg',name: 'TREZE',type: 'Limited Edition',price: 8.50,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/10.jpg',name: 'ACHES',type: 'Limited Edition',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/11.jpg',name: 'KATUN',type: 'Limited Edition',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/12.jpg',name: 'DABSMYLA',type: 'Limited Edition',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/13.jpg',name: 'LADY PINK',type: 'Limited Edition',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/14.jpg',name: 'PEZ',type: 'Limited Edition',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/15.jpg',name: 'JEAN BASQUIAT',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/16.jpg',name: 'WILD STYLE',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/17.jpg',name: 'Musa 71',type: 'Limited Edition',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/18.jpg',name: 'HUEMAN',type: 'Limited Edition',price: 8.50,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/19.jpg',name: 'ANDRÈ SARAVIA',type: 'Limited Edition',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/20.jpg',name: 'PESIMO',type: 'Limited Edition',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/21.jpg',name: 'ENTES',type: 'Limited Edition',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/22.jpg',name: 'EL MAC',type: 'Limited Edition',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/23.jpg',name: 'ITS A LIVING',type: 'Limited Edition',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/24.jpg',name: 'ZEZAO',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/25.jpg',name: 'SATURNO',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/26.jpg',name: 'VOGUE',type: 'Limited Edition',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/27.jpg',name: 'CRYPTIK',type: 'Limited Edition',price: 8.50,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/28.jpg',name: 'REMIO X ROSE BETON',type: 'Limited Edition',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/29.jpg',name: 'CEET',type: 'Limited Edition',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/30.jpg',name: 'OKUDA',type: 'Limited Edition',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/31.jpg',name: 'JACE',type: 'Limited Edition',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/32.jpg',name: 'GREEMS',type: 'Limited Edition',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/33.jpg',name: 'SINO',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/34.jpg',name: 'OG SLICK',type: 'Limited Edition',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/35.jpg',name: 'INTI',type: 'Limited Edition',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselLimitedEdition/36.jpg',name: 'DALEK',type: 'Limited Edition',price: 8.50,stock: 500,clearance: false,quantity:0,},

  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/1.jpg',name: 'Water Based Markers',type: 'Markers',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/2.jpg',name: '94 Graphic Markers',type: 'Markers',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/3.jpg',name: 'Technical Markers',type: 'Markers',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/4.jpg',name: 'Street Paint Markers',type: 'Markers',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/5.jpg',name: 'Street Ink Markers',type: 'Markers',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/carosuelMarkers&Dabbers/6.jpg',name: 'Pro Chalk Markers',type: 'Markers',price: 4.50,stock: 600,clearance: false,quantity:0,},

  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/1.jpg',name: '5 mm Empty Refillable',type: 'Empty',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/2.jpg',name: '1,2 mm Empty Refillable',type: 'Empty',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/3.jpg',name: '10 mm Empty Refillable',type: ' Empty',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/4.jpg',name: '15 mm Empty Refillable',type: ' Empty',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/5.jpg',name: '10 mm Empty Refillable Dabber',type: 'Empty',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Empty/6.jpg',name: '18 mm Empty Refillable Dabber',type: 'Empty',price: 4.50,stock: 600,clearance: false,quantity:0,},

  {img:'../../../assets/img/carouselMarkers&Refills/Packs/1.jpg',name: 'Water Based Markers',type: 'Packs',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/Packs/2.jpg',name: '94 Graphic Markers',type: 'Packs',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/Packs/3.jpg',name: 'Technical Markers',type: ' Packs',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/carouselMarkers&Refills/Packs/4.jpg',name: 'Street Paint Markers',type: ' Packs',price: 3.50,stock: 300,clearance: false,quantity:0,},

  {img:'../../../../assets/img/carouselMarkers&Refills/Refills/1.jpg',name: 'Water Based Paint Refills',type: 'Refills',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Refills/2.jpg',name: 'Street Paint Refills',type: 'Refills',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Refills/3.jpg',name: 'Street Ink Refills',type: 'Refills',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Refills/4.jpg',name: 'MTN Liquid',type: 'Refills',price: 3.50,stock: 300,clearance: false,quantity:0,},

  {img:'../../../../assets/img/carouselMarkers&Refills/Tips/1',name: 'Markers',type: 'Empty',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Tips/2.jpg',name: 'DABBERS TIPS',type: 'Empty',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../../assets/img/carouselMarkers&Refills/Tips/3',name: '94 Graphic Markers Tips',type: ' Empty',price: 3.50,stock: 500,clearance: true,quantity:0,},

  {img:'../../../assets/img/carouselOnlineShop/8.jpg',name: 'MTN SOCKS',type: 'Empty',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselOnlineShop/bag.jpg',name: 'Accesories',type: 'Empty',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/carouselOnlineShop/4.jpg',name: 'T-shirt',type: ' Empty',price: 3.50,stock: 500,clearance: true,quantity:0,},

  {img:'../../../assets/img/accesories.html/Merchandise/1.jpg',name: 'MTN Tool Belt',type: 'Accesories',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/2.jpg',name: 'MTN Swatchbooks',type: 'Accesories',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/3.jpg',name: 'MTN Box',type: 'Accesories',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/4.jpg',name: 'MTN Metal Enamel Mug',type: 'Accesories',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/5.jpg',name: 'MTN Water Bottle',type: 'Accesories',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/6.jpg',name: 'MTN Systems',type: 'Accesories',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/7.jpg',name: 'MTN Stickers',type: 'Accesories',price: 4.50,stock: 600,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/8.jpg',name: 'MTN Pandora',type: 'Accesories',price: 2.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Merchandise/9.jpg',name: 'Wall To Wall',type: 'Accesories',price: 8.50,stock: 500,clearance: false,quantity:0,},
  
  {img:'../../../assets/img/accesories.html/Protection/1.jpg',name: 'MTN Protective Face Mask',type: 'Empty',price: 3.00,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Protection/2.jpg',name: 'MTN Gel',type: 'Empty',price: 4.00,stock: 500,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Protection/3.jpg',name: 'MTN PRO Gloves',type: ' Empty',price: 3.50,stock: 500,clearance: true,quantity:0,},
  {img:'../../../assets/img/accesories.html/Protection/4.jpg',name: 'MTN Nitrile Gloves',type: ' Empty',price: 3.50,stock: 300,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Protection/5.jpg',name: 'MTN Ninja',type: 'Empty',price: 7.00,stock: 0,clearance: false,quantity:0,},
  {img:'../../../assets/img/accesories.html/Protection/6.jpg',name: 'MTN HandCleaner',type: 'Empty',price: 4.50,stock: 600,clearance: false,quantity:0,},

];
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['img', 'name', 'price','stock','amount','buy'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  addToCart(list:Product):void {
    this.cart.addToCart(list);
    list.stock -= list.quantity;
    list.quantity = 0;//se reinicia a 0 para la siguiente compra. (habria que charlarlo con el cliente)
  }
  maxReached(m:string){
    alert(m);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
