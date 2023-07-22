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
import {AddComponent as addemp} from "./employees/add/add.component";
import {EditComponent as editemp} from "./employees/edit/edit.component";
import {DetailsComponent} from "./patient/details/details.component";


const routes: Routes = [



    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
  {
    path: '',
    component: BlankComponent,
    children: [
        { path: 'profile', component: UserProfileComponent  },
        { path: 'patient/add', component: AddComponent },
        { path: 'patient', component: ListpatientsComponent },
        { path: 'patient/:id', component: EditComponent },
        { path: 'patient/details/:id', component: DetailsComponent },
        { path: 'analyses/add', component: AddAnalyseComponent },
        { path: 'analyses', component: ListAnalaysesComponent },
        { path: 'analyses/:id', component: Editanalyses },
        { path: 'employees', component: IndexComponent },
        { path: 'employees/add', component: addemp },
        { path: 'employees/:id', component: editemp },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}