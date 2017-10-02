import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../../components/home/home.component';
import {CrudComponent} from '../../components/crud/crud.component';
import {ItemComponent} from '../app-items/components/item/item.component';
import {LoggedInGuard} from '../../services/security/logged-in.guard';
import {LoginComponent} from '../../components/login/login.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {ItemResolver} from './resolvers/items/item-resolver';
import {PermissionsGuard} from "../../services/security/permissions.guard";


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
    },
    {
      path: 'admin',
      data: {role: 'admin'},
      canActivate: [PermissionsGuard],
      loadChildren: '../admin/admin.module#AdminModule'
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
