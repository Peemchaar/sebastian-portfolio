import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
 // @ViewChild("myElem") MyProp: ElementRef | undefined;
  
  project: IProject | null = null;
  projectsList: Array<IProject> = new ProjectsList;
  nextProject: IProject | undefined
  index: number = 0
  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //this.MyProp!.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });



    this.projectService.currentProject.subscribe(project => {
      this.project = project;
      if(this.project == null){
        this.router.navigate(['/projects']);
      }
    });
    this.index = this.projectsList.findIndex(p => p.name === this.project!.name)
    if(this.index == this.projectsList.length - 1){
      this.nextProject = this.projectsList[0]
    }else{
      this.nextProject = this.projectsList[this.index! + 1]
    }
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
        this.nextProject = this.projectsList[this.index!]
      }
    }
  }

  goBack(){
    this.router.navigate(['/projects']);
  }
}
