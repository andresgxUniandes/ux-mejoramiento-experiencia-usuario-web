import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent) },
  { path: 'ingresar', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'registrar', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'como-funciona', loadComponent: () => import('./pages/como-funciona/como-funciona.component').then(m => m.ComoFuncionaComponent) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
];
