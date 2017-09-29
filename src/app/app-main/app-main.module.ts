import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {TopRightMenuComponent} from './top-right-menu/top-right-menu.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {RouterModule} from '@angular/router';
import {BreadCrumbComponent} from './bread-crumb/bread-crumb.component';
import {ContainerComponent} from './container/container.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
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
