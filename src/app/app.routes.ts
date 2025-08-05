import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'essays', loadComponent: () => import('./pages/essays/essays').then(m => m.Essays) },
  { path: 'tech', loadComponent: () => import('./pages/tech/tech').then(m => m.Tech) },
  { path: 'bio', loadComponent: () => import('./pages/bio/bio').then(m => m.Bio) },
];
