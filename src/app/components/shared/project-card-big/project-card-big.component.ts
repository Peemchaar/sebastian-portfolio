import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project.interface';
import { HeaderService } from 'src/app/services/header.service';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-card-big',
  templateUrl: './project-card-big.component.html',
  styleUrls: ['./project-card-big.component.css']
})
export class ProjectCardBigComponent {
  @Input() project: IProject | undefined;
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  viewDetails(route: string){
    this.headerService.updateCurrentPage('');
    this.projectService.updatecurrentProject(this.project!)
    this.headerService.updateDisolveState(true)
    setTimeout(() => 
      {
        this.router.navigate(['/project-details']);
      },
    500);
    
  }
}
