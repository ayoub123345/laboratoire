import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {formatDate} from "../../date.helper";

@Component({
  selector: 'app-list-analayses',
  templateUrl: './list-analayses.component.html',
  styleUrls: ['./list-analayses.component.scss']
})
export class ListAnalaysesComponent implements OnInit {

  dtOptions: any  = {};

  data: Array<any> = [];

  constructor(private appservice : ApiServiceService  ,     public router: Router , private toastr: ToastrService   ) { }

  getStatusColorClass(status: string): string {
    if (status === 'PENDING') {
      return 'badge badge-warning'; // Bootstrap class for yellow/orange tag
    } else if (status === 'READY') {
      return 'badge badge-success'; // Bootstrap class for green tag
    } else {
      return 'badge badge-secondary'; // Default Bootstrap class for other statuses
    }
  }
  dateFormat(dateString: string , time : boolean ): string {
    return formatDate(dateString , time);
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
    this.appservice.getAnalyses().subscribe(
        (patients: any) => {
          this.data = Object.values(patients);

        },
        (error: any) => {
          console.error('Error retrieving patients:', error);
        }
    );

  }
  edit(id : any):void
  {
    this.router.navigate(['/analyses', id]);


  }

  delete(id : any):void
  {

    this.appservice.deleteAnalyses(id).subscribe(
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

  protected readonly formatDate = formatDate;
}
