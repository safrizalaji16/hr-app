import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { JobPositionComponent } from '../components/job-position/job-position.component';
import { JobTitleComponent } from '../components/job-title/job-title.component';
import { LoginComponent } from '../components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { JobTitleFormComponent } from '../components/job-title-form/job-title-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobTitleEditComponent } from '../components/job-title-edit/job-title-edit.component';
import { JobPositionFormComponent } from '../components/job-position-form/job-position-form.component';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { JobPositionEditComponent } from '../components/job-position-edit/job-position-edit.component';
import { EmployeeEditComponent } from '../components/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'add-job-title',
    component: JobTitleFormComponent,
  },
  {
    path: 'job-position',
    component: JobPositionComponent,
  },
  {
    path: 'add-job-position',
    component: JobPositionFormComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'add-employee',
    component: EmployeeFormComponent,
  },
  {
    path: 'edit-job-title/:id',
    component: JobTitleEditComponent,
  },
  {
    path: 'edit-job-position/:id',
    component: JobPositionEditComponent,
  },
  {
    path: 'edit-employee/:id',
    component: EmployeeEditComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    JobPositionComponent,
    JobTitleComponent,
    EmployeeComponent,
    LoginComponent,
    JobTitleFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
