import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  project: IProject | null = null;
  
  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.projectService.currentProject.subscribe(project => {
      this.project = project;
      if(this.project == null){
        this.router.navigate(['/projects']);
      }
    });
  }
}
