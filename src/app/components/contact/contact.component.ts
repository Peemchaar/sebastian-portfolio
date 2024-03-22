
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Euler, PerspectiveCamera, Vector3 } from 'three';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  planet$ = this.ngtGLTFLoaderService.load('../../../assets/3d/world_earth_planet_GLTF/scene.gltf');

  constructor(
    private ngtGLTFLoaderService: NgtGLTFLoaderService
  ) {
    
  }

  ngOnInit(): void {
   
  }

  setInitial(controls: NgtSobaOrbitControls){
    const orbitControl = controls.controls;
    const camera = orbitControl.object as PerspectiveCamera;
    orbitControl.autoRotate = true
    orbitControl.autoRotateSpeed = 3
    orbitControl.rotateSpeed = 3
    camera.zoom = 1;
    
  }

}
