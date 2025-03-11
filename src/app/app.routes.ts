import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadComponent:() =>import('./login/login.component').then(m => m.LoginComponent)},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [authGuard]}
];
