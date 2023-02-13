import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobPositionService } from 'src/app/services/job-position.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  form = new EmployeeModel();
  jobPositions: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private jobPositionService: JobPositionService
  ) {}

  ngOnInit(): void {
    this.getAllJobPositions();
  }

  getAllJobPositions() {
    this.jobPositionService.getAllJobPositions().subscribe((res) => {
      this.jobPositions = res;
    });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.form).subscribe((res) => {
      this.router.navigate(['/employee']);
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Add Employee`,
      });
    });
  }
}
