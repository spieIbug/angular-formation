import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import {AppRoutingModule} from './app-routing.module';
import {AppItemsModule} from './app-items/app-items.module';
import {AppMainModule} from './app-main/app-main.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent
  ],
  imports: [
    AppRoutingModule,
    AppMainModule,
    AppItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
