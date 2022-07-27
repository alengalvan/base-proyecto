import { formatDate } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class funcionesGenerales{

    public date = new Date();
    public fechaValida:number = 2020;
    public today:string;

    constructor(){
        this.today = formatDate(this.date, 'yyyy-MM-dd', 'en-US');
    }

    public obtenerDigitos(posicion:number,digito:string):string{
        let maxLength = posicion - digito.toString().length;    
        if(maxLength > 0){
            let dato = new Array( maxLength + (/\./.test( digito ) ? 2 : 1) ).join( '0' ) + digito;
            return dato;
        }
    }


    public validarFechaExpediente(fechaIngresada):number{

        const fechaActual = this.date.getFullYear();
    
        if(fechaIngresada < this.fechaValida ){
          return 0;
        }
        if(fechaIngresada > fechaActual ){
          return 1;
        }
    
      }
    


}