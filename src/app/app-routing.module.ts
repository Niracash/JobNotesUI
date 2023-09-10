import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { RemovedJobComponent } from './components/removed-job/removed-job.component';
import { SearchedJobComponent } from './components/searched-job/searched-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'removed-jobs',
    component: RemovedJobComponent
  },
  {
    path: 'searched-jobs',
    component: SearchedJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
