import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {AppComponent} from "../app.component";
import { ListpatientsComponent } from './listpatients/listpatients.component';
import {RouterModule} from "@angular/router";
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AddComponent,
    ListpatientsComponent,
    EditComponent,
    DetailsComponent
  ],
    imports: [
        BrowserModule, CommonModule, ReactiveFormsModule, DataTablesModule, FormsModule, RouterModule
    ]
    ,
  bootstrap: [AppComponent]
})
export class PatientModule { }
