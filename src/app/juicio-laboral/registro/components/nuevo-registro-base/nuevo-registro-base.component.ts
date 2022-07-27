import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/comun/alert';
import { ROLE } from 'src/app/comun/helper/role.helper';
import { AccountServiceB } from 'src/app/comun/service/maiaccount.service';

@Component({
  selector: 'app-nuevo-registro-base',
  templateUrl: './nuevo-registro-base.component.html',
  styleUrls: ['./nuevo-registro-base.component.css']
})
export class NuevoRegistroBaseComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  @ViewChild('tableModal') tableModal: any;

  subscriptionUsr: Subscription;
  urlBase: string;
  name: string;
  role: string;
  isUserLogged: boolean;
  isADMINISTRADOR: boolean;
  isABOGADO: boolean;
  isCLON_ABOGADO: boolean;
  isJEFE_DE_DEPARTAMENTO: boolean;
  isCLON_JEFE_DE_DEPARTAMENTO: boolean;
  isJEFE_DE_SERVICIOS_JURIDICOS: boolean;
  isCLON_DE_JEFE_DE_SERVICIOS_JURI: boolean;
  isJEFE_DE_ÁREA: boolean;
  isSUBJEFE_DE_DIVISIÓN: boolean;
  isCONSULTA: boolean;
  isTITULAR_DE_DIVISIÓN: boolean;
  isCOORDINADOR: boolean;
  isCLON_DE_COORDINADOR: boolean;

  public etapa: number;
  excluirGobMx: boolean;

  constructor(
    private accountService: AccountServiceB,
    public spinner: NgxSpinnerService,
    private changeDetectorRef: ChangeDetectorRef,
    private datePipe: DatePipe,
    private ruta: ActivatedRoute,
    private router: Router,) {
      console.log("entramos a nuevo registro")
    this.urlBase = "http://www.imss.gob.mx";
    this.isUserLogged = false;

   }

  ngOnDestroy(): void {
    this.subscriptionUsr?.unsubscribe();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges()
  }
  ngAfterViewInit(): void {

  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://framework-gb.cdn.gob.mx/gobmx.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

  ngOnInit(): void {
    console.log("entramos a nuevo registro")
    this.excluirGobMx = this.ruta.children[0].snapshot.data?.excluirGobMx || false;
    if(!this.excluirGobMx){
      this.loadScript();
    }
    this.ruta.queryParams
    .subscribe(params => {

      if(params.token){
        localStorage.clear();
        const token = decodeURIComponent(params.token);
        this.accountService.agregaUsuarioExterno(decodeURIComponent(escape(atob(token))));
      }
    });

  //   this.subscriptionUsr = this.accountService.user.subscribe(user => {
  //     console.log('usuario logeado',user)
  //     this.isUserLogged = (user != null);
  //     if (this.isUserLogged) {
  //       //console.log('#######Timer')
  //       //this.accountService.startRefreshTokenTimer();
  //         this.roleValidator(this.accountService.getRole());
  //         this.name = this.accountService.getShortName();
  //     } else {
  //         this.cleanRole();
  //     }
  // });
  }

  roleValidator(rol: string[]) {
    if (!rol) {
        this.cleanRole();
        return;
    }
    this.isADMINISTRADOR = rol.includes(ROLE.ADMINISTRADOR);
    this.isABOGADO = rol.includes(ROLE.ABOGADO);
    this.isCLON_ABOGADO = rol.includes(ROLE.CLON_ABOGADO);
    this.isJEFE_DE_DEPARTAMENTO = rol.includes(ROLE.JEFE_DE_DEPARTAMENTO);
    this.isCLON_JEFE_DE_DEPARTAMENTO = rol.includes(ROLE.CLON_JEFE_DE_DEPARTAMENTO);
    this.isJEFE_DE_SERVICIOS_JURIDICOS = rol.includes(ROLE.JEFE_DE_SERVICIOS_JURIDICOS);
    this.isCLON_DE_JEFE_DE_SERVICIOS_JURI = rol.includes(ROLE.CLON_DE_JEFE_DE_SERVICIOS_JURI);
    this.isJEFE_DE_ÁREA = rol.includes(ROLE.JEFE_DE_AREA);
    this.isSUBJEFE_DE_DIVISIÓN = rol.includes(ROLE.SUBJEFE_DE_DIVISIÓN);
    this.isCONSULTA = rol.includes(ROLE.CONSULTA);
    this.isCOORDINADOR = rol.includes(ROLE.COORDINADOR);
    this.isCLON_DE_COORDINADOR = rol.includes(ROLE.CLON_DE_COORDINADOR);

    this.role = rol[0];
  }
  cleanRole() {
    this.isADMINISTRADOR = false;
    this.isABOGADO = false;
    this.isCLON_ABOGADO = false;
    this.isJEFE_DE_DEPARTAMENTO = false;
    this.isCLON_JEFE_DE_DEPARTAMENTO = false;
    this.isJEFE_DE_SERVICIOS_JURIDICOS = false;
    this.isCLON_DE_JEFE_DE_SERVICIOS_JURI = false;
    this.isJEFE_DE_ÁREA = false;
    this.isSUBJEFE_DE_DIVISIÓN = false;
    this.isCONSULTA = false;
    this.isTITULAR_DE_DIVISIÓN = false;
    this.isCOORDINADOR = false;
    this.isCLON_DE_COORDINADOR = false;
    this.name = "";
    this.role = "";
  }

  openModal() {
    this.tableModal.nativeElement.className = 'modal show-modal';
  }

  closeModal() {
    this.tableModal.nativeElement.className = 'modal hide-modal';
  }


}
