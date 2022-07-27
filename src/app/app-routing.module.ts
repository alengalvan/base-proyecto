import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './comun/config/routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
