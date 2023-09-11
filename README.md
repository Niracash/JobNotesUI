# **JobNotesUI**

This is the frontend for JobNotes, created in Angular. 

## Table of Contents

- [1. Models](#1-models)
- [2. Services](#2-services)
- [3. Components](#3-components)
- [4. Views (HTML)](#4-views-html)
- [Additional Notes](#additional-notes)


## **1. Models**

### **Job Model (job.model.ts)**

**Attributes:**

- `id`: Id of the job.
- `companyName`: Name of the company.
- `email`: Email for contact.
- `phoneNumber`: Phone number for contact.
- `details`: Personal Notes about the job.
- `searched`: Boolean to search job.
- `createdDate`: Date the job was created.
- `searchedDate`: Date the job was searched.
- `isRemoved`: Boolean to temporary remove job.
- `removedDate`: Date the job was temporarily removed.

## **2. Services**

### **Job Service (job.service.ts)**

- `getAllJobs()`: Fetches all jobs.
- `addJob(job: Job)`: Adds a new job.
- `updateJob(id: string, job: Job)`: Updates a specific job.
- `removeJob(id: string)`: Temporarily removes a specific job.
- `getAllRemovedJobs()`: Fetches all temp removed jobs.
- `restoreRemovedJob(id: string, job: Job)`: Restores a specific removed job.
- `permRemoveJob(id: string)`: Permanently removes job.
- `getAllSearchedJobs()`: Fetches all searched jobs.

## **3. Components**

### **Searched Job Component (searched-job.component)**

- **Functionalities:**
  - Fetches and displays all the searched jobs.
- **Utilities:** 
  - `convertToHtmlBreaks(text: string)`: Converts newline characters to HTML line breaks.

### **Removed Job Component (removed-job.component)**

- **Functionalities:**
  - Fetches and displays all the removed (archived) jobs.
  - Provides an option to restore or permanently delete a job.
- **Utilities:** 
  - `convertToHtmlBreaks(text: string)`: Converts newline characters to HTML line breaks.

### **Jobs Component (jobs.component)**

- **Functionalities:**
  - Allows the user to add a new company.
  - Displays all the available jobs.
  - Provides an option to search or delete the job.

## **4. Views (HTML)**

- **Searched Jobs (searched-job.component.html):**
  - Displays a list of all searched jobs.
  - `*ngFor` for looping through jobs and displays details like `companyName`, `email`, etc.

- **Removed Jobs (removed-job.component.html):**
  - Displays a list of all removed jobs.
  - Provides links for restoring or permanently deleting jobs.

- **Jobs (jobs.component.html):**
  - Provides a form to add new jobs/companies.
  - Displays a list of all jobs with options to search, update or archive them.

## **Additional Notes:**

- **Utilities:** 
  - `convertToHtmlBreaks(text: string)`: Converts newline characters to HTML line breaks.
- The default GUID is `'00000000-0000-0000-0000-000000000000'`.
