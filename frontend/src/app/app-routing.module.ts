import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {AppComponent} from "./app.component";
import { BlankComponent } from './Layout/blank.component';
import {AddComponent} from "./patient/add/add.component";
import {IndexComponent} from "./employees/index/index.component";
import {ListpatientsComponent} from "./patient/listpatients/listpatients.component";
import {EditComponent} from "./patient/edit/edit.component";
import {EditComponent as Editanalyses} from "./analyses/edit/edit.component";
import {AddAnalyseComponent} from "./analyses/add-analyse/add-analyse.component";
import {ListAnalaysesComponent} from "./analyses/list-analayses/list-analayses.component";


const routes: Routes = [



    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
  {
    path: '',
    component: BlankComponent,
    children: [
        { path: 'profile', component: UserProfileComponent  },
        { path: 'patient/add', component: AddComponent },
        { path: 'employees', component: IndexComponent },
        { path: 'patient', component: ListpatientsComponent },
        { path: 'patient/:id', component: EditComponent },
        { path: 'analyses/add', component: AddAnalyseComponent },
        { path: 'analyses', component: ListAnalaysesComponent },
        { path: 'analyses/:id', component: Editanalyses },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}