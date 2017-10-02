import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {AppItemsModule} from './modules/app-items/app-items.module';
import {AppMainModule} from './modules/app-main/app-main.module';
import {UserService} from './services/user.service';
import {LoggedInGuard} from './services/security/logged-in.guard';
import { LoginComponent } from './components/login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {PermissionsGuard} from "./services/security/permissions.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMainModule,
    AppItemsModule
  ],
  providers: [UserService, LoggedInGuard, PermissionsGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
