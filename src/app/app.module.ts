import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCarouselMainComponent } from './components/app-carousel-main/app-carousel-main.component';
import { SampleIndexComponent } from './components/sample-index/sample-index.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
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
import { SprayListComponent } from './components/spray-list/spray-list.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { CartComponent } from './components/cart/cart.component';
import { CarouselMultiItemComponent } from './components/carousel-multi-item/carousel-multi-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCarouselMainComponent,
    SampleIndexComponent,
    ButtonsComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    HomeComponent,
    SprayComponent,
    MarkersRefillsComponent,
    AccessoriesComponent,
    DistributionComponent,
    StoreComponent,
    SprayListComponent,
    InputIntegerComponent,
    CartComponent,
    CarouselMultiItemComponent,
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
