import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project.interface';
import { HeaderService } from 'src/app/services/header.service';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: IProject | undefined;
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {

  }


  navigate(){
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
