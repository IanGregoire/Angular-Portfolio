import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechnologyComponent } from './pages/technology/technology.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'technology', component: TechnologyComponent }
];

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     loadComponent: () =>
//       import('./pages/home/home.component').then(m => m.HomeComponent),
//   },
//   {
//     path: 'about',
//     loadComponent: () =>
//       import('./pages/about/about.component').then(m => m.AboutComponent),
//   },
//   {
//     path: 'technology',
//     loadComponent: () =>
//       import('./pages/technology/technology.component').then(m => m.TechnologyComponent),
//   },
//   {
//     path: 'projects',
//     loadComponent: () =>
//       import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
//   },
//   {
//     path: '**',
//     redirectTo: 'home',
//   },
// ];
