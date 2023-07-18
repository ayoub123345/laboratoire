import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {AppComponent} from "./app.component";
import { BlankComponent } from './blank/blank.component';
import {AddComponent} from "./patient/add/add.component";


const routes: Routes = [



    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
  {
    path: '',
    component: BlankComponent,
    children: [
        { path: 'profile', component: UserProfileComponent  },
        { path: 'patient/add', component: AddComponent },


     ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}