import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SalarydetailsComponent } from './salarydetails/salarydetails.component';
/*Route Configuration */
const routes: Routes = [
{component:LoginComponent, path:'login'},
{component:RegisterComponent, path:'register'},
{component:EmployeesComponent, path:'employees'},
{component:SalarydetailsComponent,path:'salarydetails/:id/:name'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
