import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-cbpi-details',
  templateUrl: './cbpi-details.component.html',
  styleUrls: ['./cbpi-details.component.css']
})
export class CbpiDetailsComponent {
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
    this.project = this.projectsList[1];
    this.nextProject = this.projectsList[2]
  }

  goNext(){
    this.router.navigate([this.nextProject?.route]);
  }

  goBack(){
    this.router.navigate(['/projects']);
  }
}
