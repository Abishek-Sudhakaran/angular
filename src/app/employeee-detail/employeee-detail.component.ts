import { Component, OnInit } from '@angular/core';
import { EmployeeeServiceService } from '../employee-service.service'

@Component({
  selector: 'app-employeee-detail',
  template: `
    <h2>Employee details</h2>
    <ul *ngFor = "let emp of employees" >
        <li> {{emp.firstName}} 
        ( {{emp.dob}} )</li>
    </ul>
  `,
  styleUrls: ['./employeee-detail.component.css']
})
export class EmployeeeDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService:EmployeeeServiceService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data =>this.employees = data);
    }

}
