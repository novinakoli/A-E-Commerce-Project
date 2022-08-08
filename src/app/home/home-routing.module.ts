import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';

const routes: Routes = [
  {
    path: '',
    component: HomecontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
