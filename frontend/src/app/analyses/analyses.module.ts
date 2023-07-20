import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnalyseComponent } from './add-analyse/add-analyse.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ListAnalaysesComponent } from './list-analayses/list-analayses.component';
import {DataTablesModule} from "angular-datatables";
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AddAnalyseComponent,
    ListAnalaysesComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        DataTablesModule
    ]
})
export class AnalysesModule { }
