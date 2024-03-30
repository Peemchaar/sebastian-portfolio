import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectCardComponent } from './components/shared/project-card/project-card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ProjectCardBigComponent } from './components/shared/project-card-big/project-card-big.component';
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectCardComponent,
    AboutComponent,
    ContactComponent,
    ProjectCardBigComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
