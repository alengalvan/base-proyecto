import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserLoginModel } from '../model/userLogin.model';
import { AccountServiceB } from '../service/maiaccount.service';

@Injectable()
export class JWTInterceptorHelper implements HttpInterceptor {
  private count = 0;
  private excludeService: Array<string> = ['/v1/amparosIndirectos/menuOpciones',
  '/v1/amparosIndirectos/expedientes', 'v1/flujoAmparoIndirecto',
  '/v1/expedientesNotificados','/v1/expedientesTramite','/v1/expedientesConcentracion',
  '/v1/aceptarExcepcion','/v1/rechazarExcepcion','/v1/eliminarExcepcion','/v1/atenderExcepcion',
  '/v1/excepciones/fetch'
  ];
    constructor(
        private accountService: AccountServiceB,
        private spinner: NgxSpinnerService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

         this.count++;
         const user = this.accountService.userValue;
         const isLoggedIn = user && user.accessToken;

         if ((isLoggedIn) || request.url.endsWith("/login")) {
            request = request.clone(this.obtenerHeaders(user, request));
         }

         if (this.isServiceExcluded(request.url) === false) {
          this.spinner.show();
          return next.handle(request).pipe(
          finalize(() => {
              this.count--;
              if (this.count === 0) {
              setTimeout(() => {
                this.spinner.hide();
              }, 100);
              }
            })
          );
        }else{
          return next.handle(request);
        }


    }

    private obtenerHeaders(user: UserLoginModel, request: HttpRequest<any>) {
        let headers = {
            setHeaders: {
                'Authorization': (user == null) ? "" : "Bearer " + user.accessToken.bearer,
            }
        };
        if (request.headers.keys().length > 0) {
            let headerString = request.headers.keys();
            for (let i = 0; i < headerString.length; i++) {
                headers.setHeaders[headerString[i]] = request.headers.get(headerString[i]);
            }
        } else if (request.method == "POST" && request.url.indexOf('upload') < 0) {
            headers.setHeaders["Content-Type"] = 'application/json;charset=UTF-8';
            headers.setHeaders["Accept"] = 'application/json, application/octet-stream ,text/plain';
        }

        return headers;
    }

    private isServiceExcluded(url: string): boolean {
      const found = this.excludeService.filter((service) => {
        if (url.includes(service)) {
          return service;
        }
      });

      return found.length > 0;
    }
}
