import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeeDetailComponent} from "./employeee-detail/employeee-detail.component";
import {EmployeeeListComponent} from "./employeee-list/employeee-list.component";


const routes: Routes = [
  {path:'detail', component:EmployeeeDetailComponent},
  {path:'list', component:EmployeeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
