import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { KaishiThemeAdminlteModule } from'./modules/kaishi-theme-adminlte/kaishi-theme-adminlte.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KaishiThemeAdminlteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
