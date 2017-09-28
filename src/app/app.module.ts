import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import {AppRoutingModule} from './app-routing.module';
import {AppItemsModule} from './app-items/app-items.module';
import {AppMainModule} from './app-main/app-main.module';
import {UserService} from './user.service';
import {LoggedInGuard} from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    AppMainModule,
    AppItemsModule,
    BrowserModule
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
