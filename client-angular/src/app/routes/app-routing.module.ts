import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employee/employee.component';
import { JobPositionComponent } from '../job-position/job-position.component';
import { JobTitleComponent } from '../job-title/job-title.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'job-title',
    component: JobTitleComponent,
  },
  {
    path: 'job-position',
    component: JobPositionComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    JobPositionComponent,
    JobTitleComponent,
    EmployeeComponent,
    LoginComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
