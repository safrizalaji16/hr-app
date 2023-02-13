import { Component, OnInit } from '@angular/core';
import { JobPositionModel } from 'src/app/model/job-position';
import { JobPositionService } from 'src/app/services/job-position.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css'],
})
export class JobPositionComponent implements OnInit {
  // The code in this class drives the component's behavior.
  jobPositions: any;

  constructor(private jobPositionService: JobPositionService) {}

  ngOnInit(): void {
    this.getAllJobPositions();
  }

  getAllJobPositions() {
    this.jobPositionService.getAllJobPositions().subscribe((res) => {
      this.jobPositions = res;
    });
  }

  deleteJobPosition(id: JobPositionModel) {
    this.jobPositionService.deleteJobPosition(id).subscribe((res) => {
      this.getAllJobPositions();
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Delete Job Position`,
      });
    });
  }
}
