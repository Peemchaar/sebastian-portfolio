import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private currentProjectSubject: BehaviorSubject<IProject|null>;
  public currentProject: Observable<IProject|null>;
    

  constructor() { 
    let project: IProject | null = null;
    this.currentProjectSubject = new BehaviorSubject<IProject|null>(project);
    this.currentProject = this.currentProjectSubject.asObservable();
  }

  public get currentProjectValue(): IProject | null {
    return this.currentProjectSubject.value;
  }

  public updatecurrentProject(project: IProject) {
    this.currentProjectSubject.next(project);
  }
}