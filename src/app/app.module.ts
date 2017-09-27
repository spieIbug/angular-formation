import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {TopRightMenuComponent} from './top-right-menu/top-right-menu.component';
import {ContainerComponent} from './container/container.component';
import {FooterComponent} from './footer/footer.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    TopRightMenuComponent,
    ContainerComponent,
    FooterComponent,
    ControlSidebarComponent,
    HomeComponent,
    CrudComponent,
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
