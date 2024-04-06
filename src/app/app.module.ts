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
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CarbonDetailsComponent } from './components/project-details/carbon-details/carbon-details.component';
import { CbpiDetailsComponent } from './components/project-details/cbpi-details/cbpi-details.component';
import { SwappincDetailsComponent } from './components/project-details/swappinc-details/swappinc-details.component';
import { KarkoDetailsComponent } from './components/project-details/karko-details/karko-details.component';



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
    ProjectsComponent,
    ProjectDetailsComponent,
    CarbonDetailsComponent,
    CbpiDetailsComponent,
    SwappincDetailsComponent,
    KarkoDetailsComponent
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
