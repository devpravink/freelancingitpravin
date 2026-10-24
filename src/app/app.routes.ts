import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    title: 'Home | My Angular App',
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },
//   {
//     path: 'about',
//     title: 'About | My Angular App',
//     loadComponent: () =>
//       import('./pages/about/about').then(m => m.About)
//   },
//   {
//     path: 'contact',
//     title: 'Contact | My Angular App',
//     loadComponent: () =>
//       import('./pages/contact/contact').then(m => m.Contact)
//   },
//   {
//     path: '**',
//     title: 'Page Not Found',
//     loadComponent: () =>
//       import('./pages/not-found/not-found').then(m => m.NotFound)
//   }
];
