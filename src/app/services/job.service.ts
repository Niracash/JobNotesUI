import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiUrl: string = "http://localhost:5131";


  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + "/api/jobs");
  }

  addJob(createJob: Job): Observable<Job> {
    //empty Guid | Googled
    createJob.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Job>(this.apiUrl + "/api/jobs", createJob)
  }

  updateJob(id:string, job: Job): Observable<Job> {
    return this.http.put<Job>(this.apiUrl + "/api/jobs/" + id, job)
  }

  removeJob(id:string): Observable<Job> {
    return this.http.delete<Job>(this.apiUrl + "/api/jobs/" + id)
  }

  getAllRemovedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + "/api/jobs/get-removed-jobs")
  }

  restoreRemovedJob(id: string, job: Job): Observable<Job> {
    return this.http.put<Job>(this.apiUrl + "/api/jobs/restore-removed-job/" + id, job)
  }

  permRemoveJob(id:string): Observable<Job> {
    return this.http.delete<Job>(this.apiUrl + "/api/jobs/perm-delete/" + id)
  }

  getAllSearchedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl + "/api/jobs/get-searched-jobs")
  }
}
