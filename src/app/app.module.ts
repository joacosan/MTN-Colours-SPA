import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCarouselMainComponent } from './components/app-carousel-main/app-carousel-main.component';
import { SampleIndexComponent } from './components/sample-index/sample-index.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CarouselMultiItemShopComponent } from './components/carousel-multi-item-shop/carousel-multi-item-shop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SprayComponent } from './components/spray/spray.component';
import { MarkersRefillsComponent } from './components/markers-refills/markers-refills.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { StoreComponent } from './components/store/store.component';
import { CarouselMultiItemMarkersComponent } from './components/carousel-multi-item-markers/carousel-multi-item-markers.component';
import { SprayListComponent } from './components/spray-list/spray-list.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { CartComponent } from './components/cart/cart.component';
import { CarouselMultiItemComponent } from './components/carousel-multi-item-spray/carousel-multi-item.component';
import { CarouselMultiItemAccesoriesComponent } from './components/carousel-multi-item-accesories/carousel-multi-item-accesories.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCarouselMainComponent,
    SampleIndexComponent,
    ButtonsComponent,
    CarouselMultiItemShopComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    HomeComponent,
    SprayComponent,
    MarkersRefillsComponent,
    AccessoriesComponent,
    DistributionComponent,
    StoreComponent,
    CarouselMultiItemMarkersComponent,
    SprayListComponent,
    InputIntegerComponent,
    CartComponent,
    CarouselMultiItemComponent,
    CarouselMultiItemAccesoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
