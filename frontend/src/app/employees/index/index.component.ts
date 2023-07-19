import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {



   users: Array<any> = [];
  constructor(private appservice : ApiServiceService) { }


  ngOnInit(): void {



    this.appservice.getUsers().subscribe(
        (users: any) => {

          this.users = Object.values(users);
            console.log(this.users);
           (window as any).initdatatable();

        },
        (error: any) => {
          console.error('Error retrieving users:', error);
        }
    );
   }

}
