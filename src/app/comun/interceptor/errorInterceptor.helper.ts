import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alert';
import { API } from '../config/endpoints';
import { AccountServiceB } from '../service/maiaccount.service';


@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {

    constructor(
        private router: Router,
        private alertService: AlertService,
        private accountServic: AccountServiceB,
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = (err.error && err.error.mensaje) || (err.error && err.error.error_description) || err.name;
            if(err.error && (err.error.error === 'unauthorized' ||  err.error.error === 'invalid_token') ){
                //this.accountServic.refreshToken();
                window.parent.location.href = API.sscLogin;
            }else if(err.error && (err.name === 'HttpErrorResponse')){
                return throwError(err.error);
            }
            else{
                this.alertService.error(error);
            }

            return throwError(error);
        }))
    }

}
