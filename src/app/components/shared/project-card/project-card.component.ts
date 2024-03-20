import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: IProject | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
