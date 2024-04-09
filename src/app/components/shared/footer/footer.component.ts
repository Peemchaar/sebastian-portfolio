import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() simple: boolean | undefined;
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }


  contact(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.headerService.updateDisolveState(true)
    this.headerService.updateCurrentPage('contact')
    setTimeout(() => 
      {
        this.router.navigate(['/contact']);
      },
    500);
  }
}
