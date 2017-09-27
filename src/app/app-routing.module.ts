import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CrudComponent} from './crud/crud.component';
import {ItemComponent} from './app-items/item/item.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'crud', component: CrudComponent,
    children: [
      {path: ':id', component: ItemComponent}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
