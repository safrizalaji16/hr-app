import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobTitleModel } from '../../model/job-title';
import Swal from 'sweetalert2';
import { JobTitleService } from 'src/app/services/job-title.service';

@Component({
  selector: 'app-job-title-edit',
  templateUrl: './job-title-edit.component.html',
  styleUrls: ['./job-title-edit.component.css'],
})
export class JobTitleEditComponent implements OnInit {
  id: any;
  form = new JobTitleModel();
  jobTitle: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobTitleService: JobTitleService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params;
    this.getOneJobTitle();
  }

  getOneJobTitle() {
    this.jobTitleService.getOneJobTitle(this.id.id).subscribe((res) => {
      this.jobTitle = res;
      this.form = this.jobTitle;
    });
  }

  editJobTitle() {
    this.jobTitleService
      .editJobTitle(this.id.id, this.form)
      .subscribe((res) => {
        this.router.navigate(['/job-title']);
        Swal.fire({
          title: 'Congrats...',
          icon: 'success',
          text: `Success Edit Job Title`,
        });
      });
  }
}
