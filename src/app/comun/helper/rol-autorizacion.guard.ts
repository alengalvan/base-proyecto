import { HostListener, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountServiceB } from './../service/maiaccount.service';
import { AlertService } from './../alert/alert.service';
import { NAV } from '../config/global';
import { API } from '../config/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RolAuthorizacionGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private accountService: AccountServiceB,
    private alertService:AlertService,
    private ruta: ActivatedRoute,
  ) {
    console.log("kkaka")
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (next.data.allowedRoles) {
      const allowedRoles = next.data.allowedRoles.map(element => {
        return element.toUpperCase();
      });
      const isAuthorized = this.esRolesUsuarioAutorizado(allowedRoles);

      if (!isAuthorized) {
        if(!this.estaLogeado()){
          window.parent.location.href = API.sscLogin;
          return false;
        }
        window.parent.location.href = API.sscHome + '?error=403'
        window.parent.window.postMessage({"alert":"error","data":"<b>Error</b> No tiene permisos para acceder a este recurso"},"*");
      }

      return isAuthorized;
    }

    return this.estaLogeado();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("oooooo")
    if (next.data.allowedRoles) {
      const allowedRoles = next.data.allowedRoles.map(element => {
        return element.toUpperCase();
      });;
      const isAuthorized = this.esRolesUsuarioAutorizado(allowedRoles);

      if (!isAuthorized) {
        if(!this.estaLogeado()){
          window.parent.location.href = API.sscLogin;
          return false;
        }
        // if not authorized, show access denied message
        window.parent.location.href = API.sscHome + '?error=403'
        //this.alertService.errorNoautorizado()
        window.parent.window.postMessage({"alert":"error","data":"<b>Error</b> No tiene permisos para acceder a este recurso"},"*");
      }

      return isAuthorized;
    }
    return this.estaLogeado();
  }

  private esRolesUsuarioAutorizado(allowedRoles: Array<string>) {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    const rol = this.accountService.getSelectedRole();
    if (rol && allowedRoles.includes(rol.desPerfil.toUpperCase())) {

      return true;
    }
    return false;
  }

  private estaLogeado(): boolean{
    console.log(this.accountService.userValue)
    return this.accountService.userValue != null || this.accountService.userValue != undefined
  }
}
