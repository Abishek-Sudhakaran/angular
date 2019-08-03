import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { EmployeeeListComponent } from './employeee-list/employeee-list.component';
import { EmployeeeDetailComponent } from './employeee-detail/employeee-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    NgforComponent,
    ComponentinteractionComponent,
    EmployeeeListComponent,
    EmployeeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
