import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteGuardHelper } from 'src/app/comun/helper/routeGuard.helper';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from 'src/app/comun/shared-module/shared.module';
import { PagerModule } from 'src/app/comun/paginado/pager';
import { RegistroRoutingModule } from './registro-routing.module';
import { EncabezadoComponent } from './components/shared-page/encabezado/encabezado.component';
import { NotificacionBaseComponent } from './components/notificacion-base/notificacion-base.component';
import { NuevoRegistroBaseComponent } from './components/nuevo-registro-base/nuevo-registro-base.component';
import { PiePaginaComponent } from './components/shared-page/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    NotificacionBaseComponent,
    NuevoRegistroBaseComponent,
    EncabezadoComponent,
    PiePaginaComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    SharedModule,
    PagerModule,
    RegistroRoutingModule
  ],
  exports:[
    EncabezadoComponent,
    PiePaginaComponent
  ],
  providers: [
    { provide: RouteGuardHelper }
  ]
})
export class RegistroModule { }
