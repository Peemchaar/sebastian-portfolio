
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { Euler, PerspectiveCamera, Vector3 } from 'three';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  customColor = new THREE.Color( 0x212529 );
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
    orbitControl.autoRotateSpeed = 1.5
    orbitControl.rotateSpeed = 1.5
    camera.zoom = 1;
    orbitControl.enableZoom = false
    
  }

}
