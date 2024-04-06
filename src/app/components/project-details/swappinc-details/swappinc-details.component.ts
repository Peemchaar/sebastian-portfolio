import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-swappinc-details',
  templateUrl: './swappinc-details.component.html',
  styleUrls: ['./swappinc-details.component.css']
})
export class SwappincDetailsComponent {
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
      this.project = this.projectsList[2];
      this.nextProject = this.projectsList[3]
    }
  
    goNext(){
      this.router.navigate([this.nextProject?.route]);
    }
  
    goBack(){
      this.router.navigate(['/projects']);
    }
}
