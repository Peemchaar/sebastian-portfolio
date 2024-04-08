import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProject, ProjectsList } from 'src/app/interfaces/project.interface';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectsList: Array<IProject> = new ProjectsList;

  mouseDown = false;

  startX: any;

  scrollLeft: any;

  @ViewChild('carrousel') slider: ElementRef | undefined;

  startDragging(e:any, flag:any) {
    this.mouseDown = true;
    this.startX = e.pageX - this.slider?.nativeElement.offsetLeft;
    this.scrollLeft = this.slider?.nativeElement.scrollLeft;
  }
  stopDragging(e:any, flag:any) {
    this.mouseDown = false;
  }
  moveEvent(e:any) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    const x = e.pageX - this.slider?.nativeElement.offsetLeft;
    const scroll = x - this.startX;
    this.slider!.nativeElement.scrollLeft = this.scrollLeft - scroll;
  }

  constructor(
    private readonly headerService: HeaderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  public navigate(target: string){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    switch (target.toLocaleLowerCase()) {
      case 'my work':
        this.headerService.updateCurrentPage(target);
        this.router.navigate(['/projects']);
        break;
      case 'about':
        this.headerService.updateCurrentPage(target);
        this.router.navigate(['/about']);
        break;
        case 'contact':
          this.headerService.updateCurrentPage(target);
          this.router.navigate(['/contact']);
          break;
      default:
        break;
    }
  }
}
