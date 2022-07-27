import { NAV } from './global';
import { Routes } from '@angular/router';

import { RolAuthorizacionGuard } from '../helper/rol-autorizacion.guard';
import { ROLE } from '../helper/role.helper';
import { HomeComponent } from 'src/app/juicio-laboral/home/home/home.component';
import { NuevoRegistroBaseComponent } from 'src/app/juicio-laboral/registro/components/nuevo-registro-base/nuevo-registro-base.component';

export const appRoutes: Routes = [
  {
    path: NAV.home,
    component: HomeComponent
  },
  {
    path: NAV.nuevoResgistroBase,
    pathMatch: 'prefix',
    component: NuevoRegistroBaseComponent,
    // canActivateChild: [RolAuthorizacionGuard],
    children:[
      {
        path:'',
        loadChildren:() => import('src/app/juicio-laboral/registro/registro.module').then(m=>m.RegistroModule),
        outlet:'registro'
      },
    ]
  },
];



