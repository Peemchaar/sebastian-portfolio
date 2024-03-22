import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  planet$ = this.ngtGLTFLoaderService.load('assets/3d/world_earth_planet.glb');

  constructor(
    private ngtGLTFLoaderService: NgtGLTFLoaderService
  ) {
    
  }

  ngOnInit(): void {
   
  }

  

}
