import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import {formatDate} from "../../date.helper";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listpatients',
  templateUrl: './listpatients.component.html',
  styleUrls: ['./listpatients.component.scss']
})
export class ListpatientsComponent implements OnInit {

  dtOptions: any  = {};

  patients: Array<any> = [];

  constructor(private appservice : ApiServiceService  ,     public router: Router , private toastr: ToastrService   ) { }

    dateFormat(dateString: string ): string {
        return formatDate(dateString);
    }
  ngOnInit(): void {
     this.dtOptions = {
      language: {
        processing:     "Traitement en cours...",
        search:         "Rechercher&nbsp;:",
        lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
        info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
        infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
        infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        infoPostFix:    "",
        loadingRecords: "Chargement en cours...",
        zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
        emptyTable:     "Aucune donnée disponible dans le tableau",
        paginate: {
          first:      "Premier",
          previous:   "Pr&eacute;c&eacute;dent",
          next:       "Suivant",
          last:       "Dernier"
        },
        aria: {
          sortAscending:  ": activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };

 this.getData();
  }


    getData()
    {
        this.appservice.getPatients().subscribe(
            (patients: any) => {
                this.patients = Object.values(patients);

            },
            (error: any) => {
                console.error('Error retrieving patients:', error);
            }
        );

    }
   edit(id : any):void
    {
        this.router.navigate(['/patient', id]);


    }

    show(id : any):void
    {
        this.router.navigate(['/patient/details', id]);


    }
    addAnalyses(id : any):void
    {
        const queryParams = { cin: id }; // Replace 'asd' with the value you want to send as a parameter

        this.router.navigate( ['analyses/add'],  { queryParams: queryParams });


    }

    delete(id : any):void
    {

        this.appservice.deletePatient(id).subscribe(
            (response) => {

                console.log(response);
                this.toastr.success('success', 'your data was deleted');
                this.getData();

            },
            (error) => {
                console.error('Error fetching data:', error);
                 this.toastr.error('success', 'there was an error');


            }
        );

    }


    downloadpdf(id : any)
    {
        window.location.href = this.appservice.apiUrl+'patients/pdf/'+id;

    }
    protected readonly formatDate = formatDate;
}
