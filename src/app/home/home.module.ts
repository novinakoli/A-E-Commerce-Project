import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { CollectionsComponent } from './homecontainer/collections/collections.component';
import { CategoriesComponent } from './homecontainer/categories/categories.component';
import { SubnavigationComponent } from './homecontainer/subnavigation/subnavigation.component';
import { TopproductsComponent } from './homecontainer/topproducts/topproducts.component';


@NgModule({
  declarations: [
    HomecontainerComponent,
    CollectionsComponent,
    CategoriesComponent,
    SubnavigationComponent,
    TopproductsComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
