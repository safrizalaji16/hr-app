import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobPositionService } from 'src/app/services/job-position.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  form = new EmployeeModel();
  employee: any;
  jobPositions: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobPositionService: JobPositionService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params;
    this.getOneEmployee();
    this.getAllJobPosition();
  }

  getOneEmployee() {
    this.employeeService.getOneEmployee(this.id.id).subscribe((res) => {
      this.employee = res;
      this.form = this.employee;
    });
  }

  getAllJobPosition() {
    this.jobPositionService.getAllJobPositions().subscribe((res) => {
      this.jobPositions = res;
    });
  }

  editEmployee() {
    this.employeeService
      .editEmployee(this.id.id, this.form)
      .subscribe((res) => {
        this.router.navigate(['/employee']);
        Swal.fire({
          title: 'Congrats...',
          icon: 'success',
          text: `Success Edit Employee`,
        });
      });
  }
}
