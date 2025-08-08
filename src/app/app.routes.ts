import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'posts', loadComponent: () => import('./pages/posts-list/posts-list').then(m => m.PostsList) },
  { path: 'post/:id', loadComponent: () => import('./pages/post/post').then(m => m.Post) },
  { path: 'tech', loadComponent: () => import('./pages/tech/tech').then(m => m.Tech) },
  { path: 'bio', loadComponent: () => import('./pages/bio/bio').then(m => m.Bio) },
];
