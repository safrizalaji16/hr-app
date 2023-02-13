import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPositionModel } from 'src/app/model/job-position';
import { JobPositionService } from 'src/app/services/job-position.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-position-edit',
  templateUrl: './job-position-edit.component.html',
  styleUrls: ['./job-position-edit.component.css'],
})
export class JobPositionEditComponent implements OnInit {
  id: any;
  form = new JobPositionModel();
  jobPosition: any;
  jobTitles: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobPositionService: JobPositionService,
    private jobTitleService: JobTitleService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params;
    this.getOneJobPosition();
    this.getAllJobTitles();
  }

  getOneJobPosition() {
    this.jobPositionService.getOneJobPosition(this.id.id).subscribe((res) => {
      this.jobPosition = res;
      this.form = this.jobPosition;
    });
  }

  getAllJobTitles() {
    this.jobTitleService.getAllJobTitles().subscribe((res) => {
      this.jobTitles = res;
    });
  }

  editJobPosition() {
    this.jobPositionService
      .editJobPosition(this.id.id, this.form)
      .subscribe((res) => {
        this.router.navigate(['/job-position']);
        Swal.fire({
          title: 'Congrats...',
          icon: 'success',
          text: `Success Edit Job Position`,
        });
      });
  }
}
