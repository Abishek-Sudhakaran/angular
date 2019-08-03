import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer undefined`,
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeeServiceService {  
  public _url = "http://localhost:4000"
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get<any>(`${this._url}/plans`);
  }
}
