import { Component, ElementRef, ViewChildren, QueryList, HostListener, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';
import { HeaderService } from 'src/app/services/header.service';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent {
  @ViewChildren('project_step') detailedStepQueryList!: QueryList<ElementRef>;

  navSticky: boolean = false;
  project: IProject | null = null;
  projectsList: Array<IProject> = new ProjectsList;
  nextProject: IProject | undefined
  index: number = 0
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private projectService: ProjectService,
    private headerService: HeaderService,
    private router: Router,
  ) { }

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
    this.projectService.currentProject.subscribe(project => {
      this.project = project;
      if(this.project == null){
        this.headerService.updateDisolveState(true)
        setTimeout(() => 
          {
            this.router.navigate(['/projects']);
          },
        500);
      }
    });
    this.index = this.projectsList.findIndex(p => p.name === this.project!.name)
    if(this.index == this.projectsList.length - 1){
      this.nextProject = this.projectsList[0]
    }else{
      this.nextProject = this.projectsList[this.index! + 1]
    }
  }

  ngAfterViewInit() {
    this.headerService.updateDisolveState(false)
  }

  goNext(){
    this.projectService.updatecurrentProject(this.nextProject!);
    this.project = this.nextProject!;
    if(this.index == this.projectsList.length - 1){
      this.index = 0
      this.nextProject = this.projectsList[1]
    }else{
      this.index! += 1
      if(this.index == this.projectsList.length - 1){
        this.nextProject = this.projectsList[0]
      }else{
        this.nextProject = this.projectsList[this.index!+ 1]
      }
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  goBack(){
    this.headerService.updateDisolveState(true)
    setTimeout(() => 
      {
        this.router.navigate(['/projects']);
      },
    500);
  }

  navigateTo(name: string){

    this.detailedStepQueryList
    this.detailedStepQueryList.forEach(div => {
      if(div.nativeElement.id == name){
        div.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        return
      }
    });
  }
}
