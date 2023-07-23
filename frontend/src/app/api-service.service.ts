import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public apiUrl = 'http://127.0.0.1:8000/api/';
  private token  ;

  constructor(private http: HttpClient , private  TmokenService : TokenService) {

    this.token = TmokenService.getToken();
    console.log(this.token);
  }
  getUsers(){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'users', { headers });
  }

  getUser(id:any){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'users/'+id, { headers });
  }
  addUser(patient : any){

    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(this.apiUrl+'users',   patient , { headers });
  }

  editUser(patient : any , id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.put<any>(this.apiUrl+'users/'+id,   patient , { headers });
  }

  deleteUser( id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.delete<any>(this.apiUrl+'users/'+id , { headers });
  }



  getPatients(){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'patients', { headers });
  }

  getPatient(id:any){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'patients/'+id, { headers });
  }
  getPatientByCin(cin:any){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'patients/cin/'+cin, { headers });
  }


  addPatient(patient : any){
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(this.apiUrl+'patients',   patient , { headers });
  }

  editPatient(patient : any , id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.put<any>(this.apiUrl+'patients/'+id,   patient , { headers });
  }


  deletePatient( id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.delete<any>(this.apiUrl+'patients/'+id , { headers });
  }



  addAnalyses(patient : any , anlayses:any){
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(this.apiUrl+'analyses',   {patient , anlayses } , { headers });
  }
  getAnalyses(){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'analyses', { headers });
  }

  getAnalyse(id:any){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'analyses/'+id, { headers });
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }
  deleteAnalyses( id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.delete<any>(this.apiUrl+'analyses/'+id , { headers });
  }
  editAnalyses(patient : any ,anlayses : any , id : any){
    const headers = this.createAuthorizationHeader();
    return this.http.put<any>(this.apiUrl+'analyses/'+id,   {patient , anlayses }  , { headers });
  }

  getStatistiques(){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'statistiques', { headers });
  }

}
