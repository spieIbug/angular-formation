import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CrudComponent} from '../crud/crud.component';
import {ItemComponent} from '../app-items/item/item.component';
import {LoggedInGuard} from '../logged-in.guard';
import {LoginComponent} from '../login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ItemResolver} from './resolvers/items/item-resolver';


const appRoutes: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {
    path: '', component: DashboardComponent, canActivate: [LoggedInGuard], children: [
    {path: 'home', component: HomeComponent},
    {
      path: 'crud', component: CrudComponent,
      children: [
        {path: 'new', pathMatch: 'full', component: ItemComponent},
        {
          path: ':id', component: ItemComponent,
          resolve: {
            item: ItemResolver
          }
        }
      ]
    }
  ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
