import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-card-big',
  templateUrl: './project-card-big.component.html',
  styleUrls: ['./project-card-big.component.css']
})
export class ProjectCardBigComponent {
  @Input() project: IProject | undefined;

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  viewDetails(route: string){
    this.router.navigate([route]);
  }
}
