import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project-service';

@Component({
  selector: 'app-carbon-details',
  templateUrl: './carbon-details.component.html',
  styleUrls: ['./carbon-details.component.css']
})
export class CarbonDetailsComponent {
  // @ViewChild("myElem") MyProp: ElementRef | undefined;
  
  project: IProject | null = null;
  projectsList: Array<IProject> = new ProjectsList;
  nextProject: IProject | undefined
  index: number = 0
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    //this.MyProp!.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    this.project = this.projectsList[0];
    this.nextProject = this.projectsList[1]
  }

  goNext(){
    this.router.navigate([this.nextProject?.route]);
  }

  goBack(){
    this.router.navigate(['/projects']);
  }
}
