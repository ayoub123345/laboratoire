import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  isLoading : boolean = false;
  errors: any = {};
  patient: any = {
      cin: '',
      firstname: '',
      lastname: '',
      birth_date: '',
      adresse: '',
       phone: '',
      sexe:"MALE"};

    constructor( private appservice : ApiServiceService , private toastr: ToastrService ,     public router: Router) { }

  ngOnInit(): void {


  }

  clickSendData()
  {


      this.isLoading = true; // Set is_loading to true before subscribing
      this.errors = {};
    this.appservice.addPatient(this.patient).subscribe(
        (response) => {
          this.toastr.success('success', 'your data was saved');
          this.isLoading = false; // Set is_loading to false when the loading is finished
          this.router.navigate(['patient']);

        },
        (error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false; // Make sure to handle errors and set is_loading to false in case of an error too
            this.toastr.error('success', 'there was an error');

            if (error && error.error && error.error.errors) {
                this.errors = error.error.errors;
            }
            console.log(this.errors)
        }
    );

  }
}
