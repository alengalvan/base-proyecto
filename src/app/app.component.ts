import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { AccountServiceB } from './comun/service/maiaccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-proyecto';

  constructor(private accountService:
    AccountServiceB,
    private router: Router,
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer){

      this.matIconRegistry.addSvgIcon(
        'trash',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/img/trash.svg')
      );

    router.events.subscribe((val) =>{
    if(val instanceof NavigationStart){
      const ruta = val as NavigationStart;
      if(ruta.url.includes('token=')){
        const token = /token=([^&]+)/.exec(ruta.url)[1];
        const decodeToken = decodeURIComponent(escape(atob(decodeURIComponent(token))));
        //console.log('::::::::::::::::decodificando',token,decodeToken)
        this.accountService.agregaUsuarioExterno(decodeToken);
      }
    }
  });
  }
  ngOnDestroy(): void {
    console.log('app destroy')
  }

}
