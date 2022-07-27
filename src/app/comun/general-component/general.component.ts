import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInjectorService } from '../herencia/app-injector.service';
import { AccountServiceB } from 'src/app/comun/service/maiaccount.service';
import { NAV } from '../config/global';
import { fromEvent, Subscription } from 'rxjs';
import { API } from '../config/endpoints';
import { excepcionCheck } from '../model/file.model';
import { AlertService } from 'src/app/comun/alert';
import { SSCRutasHome } from '../enums/ssc-rutas-home.enum';
import { FileUtils } from '../util/file-util';

@Component({
  selector: 'app-general',
  template: ""
})
export class GeneralComponent implements OnDestroy{
  @ViewChild('tableModalSalir') tableModalSalir: any;

  protected accountService: AccountServiceB;
  protected delegacionUsuario: any;
  protected textAreaMaxLength = 1200;
  public isSubmit = false;
  subscripcion: Subscription;
  existeExcepcion: boolean;

  private _ruta: ActivatedRoute;
  private _alertsServices: AlertService;
  protected _excepcionEncontrada: any;

  constructor(
    public router?: Router,
) {
  const injector = AppInjectorService.getInjector();
  this.accountService = injector.get(AccountServiceB);
  this.delegacionUsuario = this.accountService.getDelegacion();
  this._ruta = injector.get(ActivatedRoute);
  this._alertsServices = injector.get(AlertService);

  history.pushState(null, null, location.href);
  this.subscripcion = fromEvent(window, 'popstate').subscribe(_ => {
      history.pushState(null, null, location.href);
  });

  this._ruta.queryParams
    .subscribe(params => {

      if(params){
        setTimeout(()=>{
          this.router?.navigate([],{
            relativeTo: this._ruta,
          queryParams: null,
          queryParamsHandling: ''
          })
        },1000);
      }
    });
}

  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  }

  validaCamposFormulario(formGroups: FormGroup[]) {
    formGroups.forEach((formulario) => {
      Object.keys(formulario.controls).forEach((field) => {
        const control = formulario.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validaCamposFormulario([control]);
        } else if (control instanceof FormArray) {
          control.controls.forEach((element) => {
            if (element instanceof FormControl) {
              element.markAsTouched({ onlySelf: true });
            } else if (element instanceof FormGroup) {
              this.validaCamposFormulario([element]);
            }
          });
        }
      });
    });
  }



  navegarA(route: string, parametro?: any) {
    this.router.navigate([route], { skipLocationChange: true, queryParams: parametro });
  }


  openModalSalir() {
    this.tableModalSalir.nativeElement.className = 'modal show-modal';
  }

  closeModalSalir() {
    this.tableModalSalir.nativeElement.className = 'modal hide-modal';
  }

  goToHome(page?) {
    window.parent.location.href = NAV.sscHome;
  }

  goToHomeSSCFromIframeSuccess(storageVar) {
    let aux = localStorage.getItem('proyect_user');
    let varData = localStorage.getItem(storageVar);
    localStorage.clear();
    localStorage.setItem('proyect_user', aux);
    localStorage.setItem(storageVar, varData);

    this.gotoSSCHome();

  }

  goToHomeSuccess(storageVar, fn?:() => any | null) {
    let aux = localStorage.getItem('proyect_user');
    let varData = localStorage.getItem(storageVar);
    localStorage.clear();
    localStorage.setItem('proyect_user', aux);
    localStorage.setItem(storageVar, varData);

    window.parent.location.href = NAV.sscHome+"?alert=success";

  }


  goToHomeError(storageVar, msg) {
    let aux = localStorage.getItem('proyect_user');
    let varData = localStorage.getItem(storageVar);
    localStorage.clear();
    localStorage.setItem('proyect_user', aux);
    localStorage.setItem(storageVar, varData);

    window.parent.location.href = NAV.sscHome+"?error="+ msg;

  }

  goToLogin() {
    this.accountService.logout()
    window.parent.location.href = API.sscLogin;
  }

  private gotoSSCHome(){
    let promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        window.parent.window.postMessage({"alert":"success","data":"La información se guardó correctamente"},"*");
      });

      resolve();
    });
    return promise;
  }


  protected getControlNoValido(form: FormGroup): AbstractControl {
    const controls: string[] = Object.keys(form.controls);
    let resp = null;
    controls.forEach(key => {
      const control = form.get(key);
      if (control?.invalid) {
        resp = control;
        return;
      }
    });

    return resp;
  }

  protected generarFechaVencimiento(fecha: string, dias:number, model, form) {
    if (fecha) {
      const today = fecha
      const data = {
        numeroDias: dias,
        fechaBase: today,
        formatofecha: "yyyy-MM-dd"
      }
      console.log(data, today)
      
    }
  }



  protected getTextoTextArea(totalRestantes): string{
    return `Tiene ${(this.textAreaMaxLength-totalRestantes)} caracteres restantes`
  }

  protected getCountTextArea(textAreaMaxLength,totalRestantes): string{
    return `Tiene ${(textAreaMaxLength-totalRestantes)} caracteres restantes`
  }

  protected getFechaFromString(fecha: any){
    return new Date(fecha.split('-')[0], fecha.split('-')[1] -1, fecha.split('-')[2])
  }

  //Excepciones
  protected excepcionesEncontradas = []

}
