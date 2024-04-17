import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayMenu: boolean = false;
  navData: InavItem[] = [
    {
      text: 'Home',
      active:  true
    },
    {
      text: 'My work',
      active:  false
    },
    {
      text: 'About',
      active:  false
    }
  ]
  currentPage: String | null = null;

  constructor(
    private readonly headerService: HeaderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let location = window.location.href
    let localArray = location.split("/");
    this.headerService.updateCurrentPage(localArray[localArray.length - 1])
    this.headerService.currentPage.subscribe(page => {
      this.currentPage = page;
      this.updateActive()
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.updateActive()
      }
    });
  }

  toggleMenu(){
    this.displayMenu = !this.displayMenu;
  }

  public navigate(target: string){
    if(this.displayMenu){
      this.toggleMenu()
    }
    switch (target.toLocaleLowerCase()) {
      case 'home':
        this.headerService.updateCurrentPage(target);
        this.headerService.updateDisolveState(true);
        setTimeout(() => 
          {
            this.router.navigate(['']);
          },
        500);
        break;
      case 'my work':
        this.headerService.updateCurrentPage(target);
        this.headerService.updateDisolveState(true);
        setTimeout(() => 
          {
            this.router.navigate(['/projects']);
          },
        500);
        break;
      case 'about':
        this.headerService.updateCurrentPage(target);
        this.headerService.updateDisolveState(true);
        setTimeout(() => 
          {
            this.router.navigate(['/about']);
          },
        500);
        break;
      case 'contact':
        this.headerService.updateCurrentPage(target);
        this.headerService.updateDisolveState(true);
        setTimeout(() => 
          {
            this.router.navigate(['/contact']);
          },
        500);
        break;
      default:
        break;
    }
  }

  updateActive(){
    this.currentPage = this.headerService.currentPageValue
    this.navData.forEach(element => {
      (element.text == this.currentPage)? element.active = true : element.active = false;
    });
  }
}

interface InavItem {
  text: string;
  active: boolean;
}
