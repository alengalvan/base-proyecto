import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { API } from '../config/endpoints';
import { Delegacion } from '../model/catalogo.model';
import { BearerList, UserLoginModel } from '../model/userLogin.model';

@Injectable({ providedIn: 'root' })
export class AccountServiceB {

  public userSubject: BehaviorSubject<UserLoginModel>;
  public user: Observable<UserLoginModel>;
  private refreshTokenTimeout;
  private variableLocalStorage: string = 'proyect_user';
  private menu = new BehaviorSubject<boolean>(true);
  private token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    if (localStorage.getItem(this.variableLocalStorage)) {
      this.token = localStorage.getItem(this.variableLocalStorage)
    } else {
      this.token = sessionStorage.getItem('token')
    }
    if(this.token){
      let tokenObject = JSON.parse(this.token);
      this.userSubject = new BehaviorSubject<any>(this.getUserByToken(tokenObject));
      this.user = this.userSubject.asObservable();
    }

  }

  agregarUsuario(jwt: string, usuario: UserLoginModel) {
    localStorage.setItem(this.variableLocalStorage, jwt);
    this.userSubject.next(usuario);
    //this.startRefreshTokenTimer();
  }

  agregaUsuarioExterno(jwt){
    let tokenTem: UserLoginModel = JSON.parse(jwt);
    this.userSubject = new BehaviorSubject<any>(null);
    this.user = this.userSubject.asObservable();
    this.userPerfilExterno(tokenTem.rol);
    this.agregarUsuario(jwt,this.getUserByToken(tokenTem));
  }

  userPerfil(cveUsuario: any, rol: any) {
    let tokenTem: UserLoginModel = JSON.parse(localStorage.getItem('proyect_user'));
    localStorage.removeItem(this.variableLocalStorage);
    localStorage.setItem('proyect_user', JSON.stringify(tokenTem));
    tokenTem = this.getUserByToken(tokenTem);
    tokenTem.id = cveUsuario;
    tokenTem.rol = rol;
    sessionStorage.setItem('roleSelected', rol);
    this.userSubject.next(tokenTem);
  }

  userPerfilExterno(rol: any) {
    let tokenTem: UserLoginModel = JSON.parse(localStorage.getItem('proyect_user'));
    localStorage.removeItem(this.variableLocalStorage);
    localStorage.setItem('proyect_user', JSON.stringify(tokenTem));
    sessionStorage.setItem('roleSelected', rol);
  }

  refreshToken() {
    console.log('::::::::Refrescando token:::::::')
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.userValue.refreshToken.bearer);
    if (this.userValue && this.userValue.refreshToken) {
      return this.http.post<any>(`${API.seguridad.oauth}`,
        body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', 'Basic bm1sc3NjQXBwOjEyMzQ1Ng==')
        })
        .toPromise()
        .then(data => {
          this.agregarUsuario(JSON.stringify(data), this.getUserByToken(data));
          return;
        });
    }
  }

  logout() {
    this.stopRefreshTokenTimer();
    localStorage.removeItem(this.variableLocalStorage);
    localStorage.clear();
    sessionStorage.clear();
    this.userSubject?.next(null);
    //this.router.navigate(['/login']);
  }

  //Recupera el nombre completo del usuario logeado
  getFullName(): string {
    if (this.userSubject != null && this.userSubject.value != null) {
      const { nombre, apellidoPaterno, apellidoMaterno } = this.userSubject.value;
      return `${nombre} ${apellidoPaterno ? apellidoPaterno : ''} ${apellidoMaterno ? apellidoMaterno : ''}`;
    }
    return "";
  }

  //Recupera nombre y primer apellido del usuario logeado
  getShortName(): string {
    if (this.userSubject != null && this.userSubject.value != null) {
      let { nombre, apellidoPaterno } = this.userSubject.value;
      if (nombre && nombre.split(" ").length >= 0) {
        nombre = nombre.split(" ")[0];
      }
      return `${nombre} ${apellidoPaterno}`;
    }
    return "";
  }

  //Recupera el id del usuario logeado
  getIdUser(): string {
    if (this.userSubject != null && this.userSubject.value != null) {
      return this.userSubject.value.id;
    }
    return null;
  }

  //Recupera el nombre del rol del usuario logeado
  getRole(): string[] {
    let abogado = [];
    if (this.userSubject != null && this.userSubject.value != null) {

      if(sessionStorage.getItem('roleSelected') != null && sessionStorage.getItem('roleSelected') != undefined){
        abogado.push(sessionStorage.getItem('roleSelected'));
      }else{
        let rrr : any= this.userSubject.value.rol;
        sessionStorage.setItem('roleSelected',rrr)
        abogado.push(rrr);
      }

      return abogado;
    }
    return null;
  }

  //Recupera la delegación del usuario logeado
  getDelegacion(): Delegacion {
    if (this.userSubject != null && this.userSubject.value != null) {
      return this.userSubject.value.delegacion;
    }
    return null;
  }

  //Recupera el username del usuario logeado
  getUser(): string {
    if (this.userSubject != null && this.userSubject.value != null) {
      return this.userSubject.value.user_name;
    }
    return null;
  }

  //Recupera la lista de roles que usuario logeado tiene asignados
  getUserList(): BearerList[] {
    if (this.userSubject != null && this.userSubject.value != null) {
      return this.userSubject.value.usuarioList;
    }
    return null;
  }

  //Recupera el objecto completo del rol seleccionado por el usuario logeado
  getSelectedRole(): any {
    let rolesUsuario = this.getUserList();
    if(rolesUsuario){
      if(rolesUsuario.length == 1){
        sessionStorage.setItem('roleSelected', rolesUsuario[0].desPerfil);
      }
      let rol = sessionStorage.getItem('roleSelected');
      if (rolesUsuario && rol) {
        const r = rolesUsuario.filter(r => r.desPerfil.toLowerCase() === rol.toLowerCase())[0];
        this.setRole(r.desPerfil)
        return r;
      }
    }

    return null;
  }

  //Recupera el token y toda la información retornada por el servidor de autenticación
  public get userValue(): UserLoginModel {
    return this.userSubject?.value;
  }

  setRole(rol) {
    if (this.userSubject != null && this.userSubject.value != null) {
     this.userSubject.value.rol = [rol];
    }
  }

  setMenu(menu: boolean) {
    this.menu.next(menu);
  }

  getMenu(): Observable<boolean> {
    return this.menu;
  }

  public startRefreshTokenTimer() {
    // Refresca cuando el tiempo de expiracion esta al 90%
    console.log('refrescando')
    if (this.userValue.accessToken && this.userValue.expires_in > 0) {
      const timeout = this.userValue.expires_in * 1000 * 0.9;
      console.log('#######timeout######',timeout)
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
    }
  }

  private stopRefreshTokenTimer() {
    if(this.refreshTokenTimeout){
      clearTimeout(this.refreshTokenTimeout);
    }
  }

  private b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  private findRole(rolesUsuario: Array<any>): any {
    if(rolesUsuario?.length == 1){
      sessionStorage.setItem('roleSelected', rolesUsuario[0].desPerfil);
    }
    let rol = sessionStorage.getItem('roleSelected');
    if (rolesUsuario && rol) {
      const r = rolesUsuario.filter(r => r.desPerfil.toLowerCase() === rol.toLowerCase())[0];
      this.setRole(r.desPerfil)
      return r;
    }
    return null;
  }

  private getUserByToken(data: any): UserLoginModel {
    try {
      let tokenDecrypt = JSON.parse(this.b64DecodeUnicode(data.access_token.split('.')[1]));
      const rol = this.findRole(tokenDecrypt.usuarioList);
      const idUser = rol ? rol.cveUsuario :
      tokenDecrypt.usuarioList.length > 0 ? tokenDecrypt.usuarioList[0].cveUsuario : '';
      let refreshTokenDecrypt = JSON.parse(this.b64DecodeUnicode(data.refresh_token.split('.')[1]));
      let user: UserLoginModel = {
        id: idUser,
        correo: tokenDecrypt.correo,
        user_name: tokenDecrypt.user_name,
        password: null,
        nombre: tokenDecrypt.nombre,
        delegacion: tokenDecrypt.delegacion,
        apellidoPaterno: tokenDecrypt.apellidoPaterno,
        apellidoMaterno: tokenDecrypt.apellidoMaterno,
        rol: (tokenDecrypt.usuarioList.length > 0 ? tokenDecrypt.usuarioList[0].desPerfil : []),
        accessToken: {
          bearer: data.access_token,
          tiempo: tokenDecrypt.exp
        },
        refreshToken: {
          bearer: data.refresh_token,
          tiempo: refreshTokenDecrypt.exp
        },
        expires_in: data.expires_in,
        usuarioList: (tokenDecrypt.usuarioList ? tokenDecrypt.usuarioList : []),
      };
      return user;
    } catch (error) {
      console.log(error)
      return null;
    }
  }

}
