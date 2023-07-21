import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../api-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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

  constructor( private appservice : ApiServiceService , private toastr: ToastrService ,     public router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');


    this.isLoading = true; // Set is_loading to true before subscribing
    this.errors = {};
    this.appservice.getPatient(id).subscribe(
        (response) => {
           this.isLoading = false; // Set is_loading to false when the loading is finished

          console.log(response);
          this.patient = response;
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

  clickSendData()
  {


    this.isLoading = true; // Set is_loading to true before subscribing
    this.errors = {};
    this.appservice.editPatient(this.patient , this.patient.id).subscribe(
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
