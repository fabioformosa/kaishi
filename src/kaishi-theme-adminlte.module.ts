import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  NgxAdminLteModule,
  LayoutAuthComponent,
  User,
  MenuService,
  LogoService,
  FooterService
} from 'ngx-admin-lte';

import { KaishiThemeAdminlteComponent } from './kaishi-theme-adminlte.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxAdminLteModule
  ],
  declarations: [
    KaishiThemeAdminlteComponent
  ],
  exports: [
    KaishiThemeAdminlteComponent
  ],
  providers: [
   MenuService,
   LogoService,
   FooterService
 ]
})
export class KaishiThemeAdminlteModule { }
