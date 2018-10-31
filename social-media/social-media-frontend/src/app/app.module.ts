import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {CommonModule} from '@angular/common';
import {AjaxService} from '../services/ajax.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AjaxService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
