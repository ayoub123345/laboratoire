 import { AuthService } from './../../shared/auth.service';
import {ApiServiceService} from "../../api-service.service";
import { Component,OnInit, ViewChild } from "@angular/core";

// User interface
export class User {
  name: any;
  email: any;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})


export class UserProfileComponent implements OnInit {

  UserProfile!: User;
  statistiques : any = {};


  constructor(private appservice : ApiServiceService ,public authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });

  }

  getData()
  {
    this.appservice.getStatistiques().subscribe(
        (patients: any) => {
          this.statistiques = (patients);
          (window as any).showStats(this.statistiques.months, this.statistiques.valus); // Replace 'John' with any desired parameter

        },
        (error: any) => {
          console.error('Error retrieving patients:', error);
        }
    );

  }



  ngOnInit() {

    this.getData();

  }
 }


