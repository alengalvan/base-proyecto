import { CUSTOM_ELEMENTS_SCHEMA, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { JuicioLaboralModule } from './juicio-laboral/juicio-laboral.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptorHelper } from './comun/interceptor/jwtInterceptor.helper';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ErrorInterceptorHelper } from './comun/interceptor/errorInterceptor.helper';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AppInjectorService } from './comun/herencia/app-injector.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    JuicioLaboralModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorHelper, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorHelper, multi: true },
    { provide: LOCALE_ID, useValue: 'en-US' },
    DatePipe,
    CurrencyPipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { 
  constructor(private injector: Injector) {
    AppInjectorService.setInjector(this.injector);
  }
}
