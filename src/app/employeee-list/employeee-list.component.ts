import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { EmployeeeServiceService } from '../employee-service.service';
import { Router } from "@angular/router"
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-employeee-list',
  template: `
  <h1>Employee List</h1>
  <ul>
  <li *ngFor = "let emp of employees" (click) = onSelect(emp)>
  {{emp.firstName}}
</li>
  </ul>

  `,
  styleUrls: ['./employeee-list.component.css']
})
export class EmployeeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeeServiceService, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }
  onSelect(emp) {
    this.router.navigate([`/list/${emp.id}`]);
  }

}
