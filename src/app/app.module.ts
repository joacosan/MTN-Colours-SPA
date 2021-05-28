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
    CarouselMultiItemCapsComponent
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
