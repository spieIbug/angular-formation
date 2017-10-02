import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {AppMainModule} from '../app-main/app-main.module';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    AppMainModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
