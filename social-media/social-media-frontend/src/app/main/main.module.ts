import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
// import {UserTableModule} from './user-table/user-table.module';


@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // UserTableModule
  ],
  declarations: [
    MainComponent,
    UserTableComponent
  ]
})

export class MainModule {}
