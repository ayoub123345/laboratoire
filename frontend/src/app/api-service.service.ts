import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  private token  ;

  constructor(private http: HttpClient , private  TmokenService : TokenService) {

    this.token = TmokenService.getToken();
    console.log(this.token);
  }
  getUsers(){
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrl+'users', { headers });
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }
}
