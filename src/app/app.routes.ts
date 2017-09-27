import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CrudComponent} from './crud/crud.component';
import {ItemComponent} from './app-items/item/item.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'crud', component: CrudComponent,
    children: [
      {path: ':id', component: ItemComponent}
    ]
  }
];
