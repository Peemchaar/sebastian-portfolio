import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-card-big',
  templateUrl: './project-card-big.component.html',
  styleUrls: ['./project-card-big.component.css']
})
export class ProjectCardBigComponent {
  @Input() project: IProject | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
