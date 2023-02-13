import { Component, OnInit } from '@angular/core';
import { JobTitleModel } from '../../model/job-title';
import Swal from 'sweetalert2';
import { JobTitleService } from 'src/app/services/job-title.service';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css'],
})
export class JobTitleComponent implements OnInit {
  // The code in this class drives the component's behavior.
  jobTitles: any;

  constructor(private jobTitleService: JobTitleService) {}

  ngOnInit(): void {
    this.getAllJobTitles();
  }

  getAllJobTitles() {
    this.jobTitleService.getAllJobTitles().subscribe((res) => {
      this.jobTitles = res;
    });
  }

  deleteJobTitle(id: JobTitleModel) {
    this.jobTitleService.deleteJobTitle(id).subscribe((res) => {
      this.getAllJobTitles();
      Swal.fire({
        title: 'Congrats...',
        icon: 'success',
        text: `Success Delete Job Title`,
      });
    });
  }
}
