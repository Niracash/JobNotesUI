import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-searched-job',
  templateUrl: './searched-job.component.html',
  styleUrls: ['./searched-job.component.css']
})
export class SearchedJobComponent implements OnInit {
  jobs: Job [] = [];
  
  constructor( private jobservice: JobService) {}
  ngOnInit(): void {
    this.getAllSearchedJobs();
  }

  getAllSearchedJobs(){
    this.jobservice.getAllSearchedJobs()
    .subscribe({
      next: (res) => {
        this.jobs = res;
      }
    })
  }

  convertToHtmlBreaks(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

}
