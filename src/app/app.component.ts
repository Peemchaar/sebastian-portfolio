import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sebastian_portfolio';
  disolveDiv = document.getElementById('disolve-container');

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }
}
