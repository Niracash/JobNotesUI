import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './components/jobs/jobs.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RemovedJobComponent } from './components/removed-job/removed-job.component';
import { SearchedJobComponent } from './components/searched-job/searched-job.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    RemovedJobComponent,
    SearchedJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
