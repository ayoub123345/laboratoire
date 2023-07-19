import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AppComponent} from "../app.component";
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    IndexComponent
  ],
    imports: [
        BrowserModule ,CommonModule , ReactiveFormsModule , FormsModule
     ]
    ,
    bootstrap: [AppComponent]

})
export class EmployeesModule { }
