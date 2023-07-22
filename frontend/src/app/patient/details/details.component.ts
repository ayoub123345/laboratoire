import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {formatDate} from "../../date.helper";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


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

  constructor( public appservice : ApiServiceService , private toastr: ToastrService ,     public router: Router , private route: ActivatedRoute) { }

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

  dateFormat(dateString: string , time : boolean ): string {
    return formatDate(dateString , time);
  }

  downloadpdf()
  {
    window.location.href = this.appservice.apiUrl+'patients/pdf/'+this.patient.id;

  }

}
