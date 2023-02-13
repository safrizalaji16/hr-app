import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobTitleModel } from '../../model/job-title';
import Swal from 'sweetalert2';
import { JobTitleService } from 'src/app/services/job-title.service';

@Component({
  selector: 'app-job-title-form',
  templateUrl: './job-title-form.component.html',
  styleUrls: ['./job-title-form.component.css'],
})
export class JobTitleFormComponent implements OnInit {
  form = new JobTitleModel();

  constructor(
    private jobTitleService: JobTitleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addJobTitle() {
    this.jobTitleService.addJobTitle(this.form).subscribe((res) => {
      this.router.navigate(['/job-title']);
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Add Job Title`,
      });
    });
  }
}
