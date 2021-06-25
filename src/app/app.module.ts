import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCarouselMainComponent } from './components/app-carousel-main/app-carousel-main.component';
import { SampleIndexComponent } from './components/sample-index/sample-index.component';
import { CarouselMultiItemGraffitiComponent } from './components/carousel-multi-item-graffiti/carousel-multi-item-graffiti.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CarouselMultiItemShopComponent } from './components/carousel-multi-item-shop/carousel-multi-item-shop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselMultiItemCapsComponent } from './components/carousel-multi-item-caps/carousel-multi-item-caps.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SprayComponent } from './components/spray/spray.component';
import { MarkersRefillsComponent } from './components/markers-refills/markers-refills.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { StoreComponent } from './components/store/store.component';
import { CarouselMultiItemProComponent } from './components/carousel-multi-item-pro/carousel-multi-item-pro.component';
import { CarouselMultiItemLeComponent } from './components/carousel-multi-item-le/carousel-multi-item-le.component';
import { CarouselMultiItemMarkersComponent } from './components/carousel-multi-item-markers/carousel-multi-item-markers.component';
import { CarouselMultiItemEmptyComponent } from './components/carousel-multi-item-empty/carousel-multi-item-empty.component';
import { CarouselMultiItemPacksComponent } from './components/carousel-multi-item-packs/carousel-multi-item-packs.component';
import { CarouselMultiItemRefillsComponent } from './components/carousel-multi-item-refills/carousel-multi-item-refills.component';
import { CarouselMultiItemTipsComponent } from './components/carousel-multi-item-tips/carousel-multi-item-tips.component';
import { CarouselMultiItemApparealComponent } from './components/carousel-multi-item-appareal/carousel-multi-item-appareal.component';
import { CarouselMultiItemMerchandiseComponent } from './components/carousel-multi-item-merchandise/carousel-multi-item-merchandise.component';
import { CarouselMultiItemProtectionComponent } from './components/carousel-multi-item-protection/carousel-multi-item-protection.component';
import { CarouselMultiItemMtnBooksComponent } from './components/carousel-multi-item-mtn-books/carousel-multi-item-mtn-books.component';
import { CarouselMultiItemSpecialComponent } from './components/carousel-multi-item-special/carousel-multi-item-special.component';
import { SprayListComponent } from './components/spray-list/spray-list.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { CartComponent } from './components/cart/cart.component';
import { CarouselMultiItemComponent } from './components/carousel-multi-item/carousel-multi-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCarouselMainComponent,
    SampleIndexComponent,
    CarouselMultiItemGraffitiComponent,
    ButtonsComponent,
    CarouselMultiItemShopComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    CarouselMultiItemCapsComponent,
    HomeComponent,
    SprayComponent,
    MarkersRefillsComponent,
    AccessoriesComponent,
    DistributionComponent,
    StoreComponent,
    CarouselMultiItemProComponent,
    CarouselMultiItemLeComponent,
    CarouselMultiItemMarkersComponent,
    CarouselMultiItemEmptyComponent,
    CarouselMultiItemPacksComponent,
    CarouselMultiItemRefillsComponent,
    CarouselMultiItemTipsComponent,
    CarouselMultiItemApparealComponent,
    CarouselMultiItemMerchandiseComponent,
    CarouselMultiItemProtectionComponent,
    CarouselMultiItemMtnBooksComponent,
    CarouselMultiItemSpecialComponent,
    SprayListComponent,
    InputIntegerComponent,
    CartComponent,
    CarouselMultiItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
