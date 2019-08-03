import { Component, OnInit } from '@angular/core';
import { EmployeeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeee-list',
  template: `
  <h1>Employee List</h1>
  <ul>
  <li *ngFor = "let emp of employees">
  {{emp.title}}
</li>
  </ul>

  `,
  styleUrls: ['./employeee-list.component.css']
})
export class EmployeeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeeServiceService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

}
