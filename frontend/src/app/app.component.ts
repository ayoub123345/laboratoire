import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import {AuthService} from "./shared/auth.service";
import {User} from "./components/user-profile/user-profile.component";
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  isSignedIn!: boolean;
  UserProfile!: User;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public AuthService: AuthService,
    public token: TokenService
  ) {

    this.AuthService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }


  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
