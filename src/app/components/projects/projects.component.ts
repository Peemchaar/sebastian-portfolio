import { Component } from '@angular/core';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList: Array<IProject> = new ProjectsList;
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private headerService: HeaderService
  ){}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.headerService.startDisolve.subscribe(value => {
      if(value == true){
        this.disolveDiv?.classList.add('disolve');
      }else{
        this.disolveDiv?.classList.remove('disolve');
      }
    });
  }

  ngAfterViewInit() {
    this.headerService.updateDisolveState(false)
  }
}
