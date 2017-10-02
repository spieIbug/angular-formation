import {NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {TopRightMenuComponent} from './components/top-right-menu/top-right-menu.component';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {RouterModule} from '@angular/router';
import {BreadCrumbComponent} from './components/bread-crumb/bread-crumb.component';
import {ContainerComponent} from './components/container/container.component';
import {ControlSidebarComponent} from './components/control-sidebar/control-sidebar.component';
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
