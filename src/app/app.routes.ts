import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent) },
  { path: 'ingresar', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent) }, // TODO: pantalla de login
  { path: 'registrar', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent) }, // TODO: pantalla de registro
];
