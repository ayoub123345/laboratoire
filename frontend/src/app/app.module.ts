import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthInterceptor } from './shared/auth.interceptor';
import { BlankComponent } from './Layout/blank.component';
import {EmployeesModule} from "./employees/employees.module";
import { DataTablesModule } from "angular-datatables";
import {PatientModule} from "./patient/patient.module";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnalysesModule} from "./analyses/analyses.module";


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    BlankComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,
    HttpClientModule,
    ReactiveFormsModule,DataTablesModule,
    FormsModule,EmployeesModule,PatientModule ,AnalysesModule ,  BrowserAnimationsModule,  ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
