import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  disolveDiv = document.getElementById('disolve-container');
  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.startDisolve.subscribe(value => {
      if(value == true){
        this.disolveDiv?.classList.add('disolve');
      }else{
        this.disolveDiv?.classList.remove('disolve');
      }
    });
  }


  ngAfterViewInit() {
    this.headerService.updateDisolveState(false)
  }

  goProjects(){
    this.headerService.updateDisolveState(true)
        setTimeout(() => 
          {
            this.router.navigate(['/projects']);
          },
        500);
  }
}
