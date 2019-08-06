import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeeDetailComponent } from "./employeee-detail/employeee-detail.component";
import { EmployeeeListComponent } from "./employeee-list/employeee-list.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";
import { ListComponent } from "./list/list.component";


const routes: Routes = [
  { path: '', redirectTo: '/detail',pathMatch:"full" },
  { path: 'detail', component: EmployeeeDetailComponent },
  { path: 'list', component: EmployeeeListComponent },
  { path: 'list/:id', component: ListComponent },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
