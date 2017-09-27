import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './footer/footer.component';
import {TopRightMenuComponent} from './top-right-menu/top-right-menu.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {RouterModule} from '@angular/router';
import {BreadCrumbComponent} from './bread-crumb/bread-crumb.component';
import {ContainerComponent} from './container/container.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    TopRightMenuComponent,
    LeftMenuComponent,
    BreadCrumbComponent,
    ContainerComponent,
    ControlSidebarComponent
  ],
  exports: [
    FooterComponent,
    TopRightMenuComponent,
    LeftMenuComponent,
    BreadCrumbComponent,
    ContainerComponent,
    ControlSidebarComponent
  ]
})
export class AppMainModule {
}
