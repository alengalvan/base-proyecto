import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DefaultValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldTypeConfig, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FieldFormExtension } from '@ngx-formly/core/lib/extensions/field-form/field-form';
import { from, of, Subject, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/comun/alert';
import { NAV } from 'src/app/comun/config/global';
import { TipoDocumento } from 'src/app/comun/enums/tipos-documento.enum';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';
import { funcionesGenerales } from 'src/app/comun/service/funcionesGenerales';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipoFlujoExcepcion } from 'src/app/comun/enums/flujo.excepcion.enum';
import { excepcionCheck } from 'src/app/comun/model/file.model';

@Component({
  selector: 'app-notificacion-base',
  templateUrl: './notificacion-base.component.html',
  styleUrls: ['./notificacion-base.component.css'],
})
export class NotificacionBaseComponent
  extends GeneralComponent
  implements OnInit, OnDestroy
{
 
 constructor(
    public router: Router,
    private activeRoute: ActivatedRoute,
    private alertService: AlertService,
    public _funciones: funcionesGenerales,
    private spinner: NgxSpinnerService
  ) {
    super(router);
    console.log("entramos notificacion")
  }

  async ngOnInit(): Promise<any> {

    console.log("entramos")

  }

  doRegistrar(){
    
  }

}


