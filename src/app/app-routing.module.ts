import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CarbonDetailsComponent } from './components/project-details/carbon-details/carbon-details.component';
import { CbpiDetailsComponent } from './components/project-details/cbpi-details/cbpi-details.component';
import { SwappincDetailsComponent } from './components/project-details/swappinc-details/swappinc-details.component';
import { KarkoDetailsComponent } from './components/project-details/karko-details/karko-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'project-details', component: ProjectDetailsComponent},
  { path: 'carbon-journey', component: CarbonDetailsComponent},
  { path: 'cbpi-etl', component: CbpiDetailsComponent},
  { path: 'swappinc', component: SwappincDetailsComponent},
  { path: 'karko', component: KarkoDetailsComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
