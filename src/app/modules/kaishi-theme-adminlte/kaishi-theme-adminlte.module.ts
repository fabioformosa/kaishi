import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KaishiThemeAdminlteComponent } from './kaishi-theme-adminlte.component';

import {NgxAdminLteModule} from 'ngx-admin-lte';

import {
    User,
    MenuService,
    LogoService,
    FooterService
} from 'ngx-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxAdminLteModule
  ],
  declarations: [KaishiThemeAdminlteComponent],
  exports: [
    KaishiThemeAdminlteComponent
  ],
  providers : [
   MenuService,
   LogoService,
   FooterService
 ]
})
export class KaishiThemeAdminlteModule { }
