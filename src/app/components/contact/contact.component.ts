
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { PerspectiveCamera } from 'three';
import * as moment from 'moment';
import { ISocialMedia, SocialMediaList } from 'src/app/interfaces/social-media.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  customColor = new THREE.Color( 0x212529 );
  planet$ = this.ngtGLTFLoaderService.load('../../../assets/3d/world_earth_planet_GLTF/scene.gltf');
  hourGMT4: string = '';
  phones: string = '+1 (407)360-3170'
  socialMedia: Array<ISocialMedia> = new SocialMediaList;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    organization: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    message: new FormControl('', [Validators.required]),
  })
  
  constructor(
    private ngtGLTFLoaderService: NgtGLTFLoaderService,
    private contactService: ContactService
  ) {
    this.hourGMT4 = moment().utcOffset('-04:00').format('HH:mm:ss');
    setInterval(() => {
      this.hourGMT4 = moment().utcOffset('-04:00').format('HH:mm:ss');
    }, 1000);
  }

  ngOnInit(): void {
    this.contactService.init();
    this.initForm();
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

  async sendEmail() {
    if(this.form.valid){
      let formValues = this.form.getRawValue();
      const parsedValues = {
        name: formValues.name,
        lastName: formValues.lastName,
        organization: formValues.organization,
        email: formValues.email,
        message: formValues.message,
      }
      await this.contactService.sendEmail(parsedValues).then(
        (response) => {
          console.log(response)
        })
    }

  }


  openMedia(link: string){
    window.open(link, '_blank');
  }

  private initForm() {
    this.form.setValue({
      name: '',
      lastName: '',
      organization: '',
      email: '',
      message: ''
    })
  }

  clearField(field: string){
    this.form.controls[field].setValue('');
  }
}
