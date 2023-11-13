import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { authGuard, publicGuard } from './core/guards';

export const routes: Routes = [
  {
    path:'',
    canActivate: [authGuard],
    loadComponent: () => import('./page/home/home.component')
    .then(mod => mod.HomeComponent),
  },
  {
    path: 'loginauth',
    canActivate: [publicGuard],
    children:[
      {
        path: 'registro',
        loadComponent: () => import('./page/loginauth/registro/registro.component')
        .then(mod => mod.RegistroComponent),
        /*path: 'registro',
        component: RegistroComponent,*/
      },
      {
        path: 'login',
        loadComponent: () => import('./page/loginauth/login/login.component')
        .then(mod => mod.LoginComponent),
        /*path: 'login',
        component: LoginComponent,*/
      },
    ],
  },
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/



