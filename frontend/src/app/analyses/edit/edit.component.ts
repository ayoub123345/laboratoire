import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {



  isLoading : boolean = false;
  errors: any = {};
  analyse: any = {
    status : 'PENDING'
  };
  patient: any = {
    cin: '',
    firstname: '',
    lastname: '',
    birth_date: '',
    adresse: '',
    phone: '',
    sexe:"MALE"};

  constructor( private appservice : ApiServiceService , private toastr: ToastrService ,       public router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.isLoading = true; // Set is_loading to true before subscribing
    this.errors = {};
    this.appservice.getAnalyse(id).subscribe(
        (response) => {
          this.isLoading = false; // Set is_loading to false when the loading is finished

          console.log(response);
          this.patient = response.patient;
          this.analyse = response;
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
    this.appservice.editAnalyses(this.patient , this.analyse , this.analyse.id).subscribe(
        (response) => {
          this.toastr.success('success', 'your data was saved');
          this.isLoading = false; // Set is_loading to false when the loading is finished
          this.router.navigate(['analyses']);

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

  onCinChange()
  {
    this.appservice.getPatientByCin(this.patient.cin).subscribe(
        (response) => {
          this.toastr.success('success', 'this patient exists');
          this.patient = response;

        },
        (error) => {

        }
    );
  }


}
