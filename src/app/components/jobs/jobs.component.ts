import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  //list of jobs
  jobs: Job[] = [];

  //post job
  createJob: Job = {
    id:'',
    companyName: '',
    email: '',
    phoneNumber: '',
    details: '',
    searched: false,
    createdDate: new Date(),
    searchedDate: new Date(),
    isRemoved: false,
    removedDate: new Date()
  };
  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(){
    this.jobService.getAllJobs()
    .subscribe({
      next: (res) => {
        this.jobs = res;
      }
    });
  }

  addJob(){
    this.jobService.addJob(this.createJob)
    .subscribe({
      //respose success
      next: (res) => {
        //update page after create
        this.getAllJobs();
      }
    })
  }
  onJobSearched(id: string, job: Job) {
    job.searched = !job.searched;
    this.jobService.updateJob(id, job)
    .subscribe({
      next: (res) => {
        this.getAllJobs();
      }
    })
  }
  removeJob(id: string){
    this.jobService.removeJob(id)
    .subscribe({
      next: (res) => {
        this.getAllJobs();
      }
    })
  }
  convertToHtmlBreaks(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
