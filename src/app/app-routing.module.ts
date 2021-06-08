import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { HomeComponent } from './components/home/home.component';
import { MarkersRefillsComponent } from './components/markers-refills/markers-refills.component';
import { SprayComponent } from './components/spray/spray.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'spray',
    component: SprayComponent
  },
  {
    path:'markers&refills',
    component: MarkersRefillsComponent
  },
  {
    path:'accessories',
    component: AccessoriesComponent
  },
  {
    path:'distribution',
    component: DistributionComponent
  },
  {
    path:'store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
