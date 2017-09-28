import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CrudComponent} from './crud/crud.component';
import {ItemComponent} from './app-items/item/item.component';
import {LoggedInGuard} from './logged-in.guard';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const appRoutes: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {
    path: '', component: DashboardComponent, canActivate: [LoggedInGuard], children: [
    {path: 'home', component: HomeComponent},
    {
      path: 'crud', component: CrudComponent,
      children: [
        {path: 'new', component: ItemComponent},
        {path: ':id', component: ItemComponent}
      ]
    }
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
export class AppRoutingModule {
}
