import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperTblComponent } from './super-tbl/super-tbl.component';
import { PrimeNgTblComponent } from './prime-ng-tbl/prime-ng-tbl.component';
import { SuperTableModule } from 'ngx-super-table';
import { Error404Component } from './error404/error404.component';
import { Error403Component } from './error403/error403.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperTblComponent,
    PrimeNgTblComponent,
    Error404Component,
    Error403Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuperTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
