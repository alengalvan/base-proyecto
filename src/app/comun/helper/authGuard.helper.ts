import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserLoginModel } from '../model/userLogin.model';
import { UsuarioMenu } from '../model/usuarioMenu.model';
import { AccountServiceB } from '../service/maiaccount.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardHelper implements CanActivate {

    userMenu: UsuarioMenu[];
    auth: boolean = false;

    constructor(
        private router: Router,
        private accountService: AccountServiceB,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = this.accountService.userValue;
        if (!this.userRolValid(user, route)) {
            this.router.navigate(['/login']);
            return false;
        }
        if(this.userMenu){
            this.userMenu.forEach(element => {
                if(element.refDetalle === route.url.toString()){
                    this.auth = true;
                }
            });
            if (!this.auth) {
                this.router.navigate(['/login']);
                return false;
            }
        }

        return true;
    }

    private userRolValid(user: UserLoginModel, route: ActivatedRouteSnapshot): boolean {
        if (!user || !user.rol || !route || !route.url) {
            return false;
        }
        return true;
    }

}
