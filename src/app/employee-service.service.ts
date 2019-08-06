import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer eed34583-d66e-4ab0-b933-b38dfd49da3d'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeeServiceService {  
  public _url = "http://13.233.174.131:9000"
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get<any>(`${this._url}/employees`,httpOptions);
  }
}
