import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeModel } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  // The code in this class drives the component's behavior.
  employees: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  deleteEmployee(id: EmployeeModel) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.getAllEmployees();
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Delete Employee`,
      });
    });
  }
}
