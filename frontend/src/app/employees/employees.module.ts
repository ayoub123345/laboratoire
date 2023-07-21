import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AppComponent} from "../app.component";
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    EditComponent
  ],
    imports: [
        BrowserModule, CommonModule, ReactiveFormsModule, DataTablesModule, FormsModule, RouterModule
    ]
    ,
    bootstrap: [AppComponent]

})
export class EmployeesModule { }
