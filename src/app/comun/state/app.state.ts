import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserLoginModel } from '../model/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AppState {

  private usuario$ = new BehaviorSubject<UserLoginModel>(undefined);
  currentUsuario = this.usuario$.asObservable();


  constructor() { }

  changeUsuario(usuario: UserLoginModel) {
    this.usuario$.next(usuario);
  }
}
