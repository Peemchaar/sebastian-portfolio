import { Component, OnInit } from '@angular/core';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectsList: Array<IProject> = new ProjectsList;
  constructor() { }

  ngOnInit(): void {
  }

}
