import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-removed-job',
  templateUrl: './removed-job.component.html',
  styleUrls: ['./removed-job.component.css']
})
export class RemovedJobComponent implements OnInit{
  jobs: Job [] = [];
  
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getAllRemovedJobs();
  }

  getAllRemovedJobs(){
    this.jobService.getAllRemovedJobs()
    .subscribe({
      next: (res) => {
        this.jobs = res;
      }
    })
  }
  restoreRemovedJob(id: string, job: Job){
    this.jobService.restoreRemovedJob(id, job)
    .subscribe({
      next: (res) => {
        this.getAllRemovedJobs();
      }
    })
  }
  permRemoveJob(id: string){
    this.jobService.permRemoveJob(id)
    .subscribe({
      next: (res) => {
        this.getAllRemovedJobs();
      }
    })
  }
  convertToHtmlBreaks(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
