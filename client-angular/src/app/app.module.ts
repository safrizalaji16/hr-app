import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { JobTitleEditComponent } from './components/job-title-edit/job-title-edit.component';
import { JobPositionFormComponent } from './components/job-position-form/job-position-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { JobPositionEditComponent } from './components/job-position-edit/job-position-edit.component';

@NgModule({
  declarations: [AppComponent, JobTitleEditComponent, JobPositionFormComponent, EmployeeFormComponent, EmployeeEditComponent, JobPositionEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
