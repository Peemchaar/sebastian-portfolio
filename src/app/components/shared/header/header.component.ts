import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

  public navigate(target: string){
    switch (target.toLocaleLowerCase()) {
      case 'home':
        this.headerService.updateCurrentPage(target);
        this.router.navigate(['']);
        break;
      case 'my work':
        this.headerService.updateCurrentPage(target);
        this.router.navigate(['/work']);
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
