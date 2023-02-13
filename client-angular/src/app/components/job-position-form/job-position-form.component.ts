import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPositionModel } from 'src/app/model/job-position';
import { JobPositionService } from 'src/app/services/job-position.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-position-form',
  templateUrl: './job-position-form.component.html',
  styleUrls: ['./job-position-form.component.css'],
})
export class JobPositionFormComponent implements OnInit {
  form = new JobPositionModel();
  jobTitles: any;

  constructor(
    private jobPositionService: JobPositionService,
    private router: Router,
    private jobTitleService: JobTitleService
  ) {}

  ngOnInit(): void {
    this.getAllJobTitles();
  }

  getAllJobTitles() {
    this.jobTitleService.getAllJobTitles().subscribe((res) => {
      this.jobTitles = res;
    });
  }

  addJobPosition() {
    this.jobPositionService.addJobPosition(this.form).subscribe((res) => {
      this.router.navigate(['/job-position']);
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Add Job Position`,
      });
    });
  }
}
