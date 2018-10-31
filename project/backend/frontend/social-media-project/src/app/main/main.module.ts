import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import{CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
imports:[
  CommonModule,
  MainRoutingModule
],
declarations:[
	MainComponent
]
})

export class MainModule{}
