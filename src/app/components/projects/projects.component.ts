import { Component } from '@angular/core';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList: Array<IProject> = new ProjectsList;

}
