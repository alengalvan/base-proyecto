import {Component} from '@angular/core';
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";


@Component({
    selector: 'custom-snackbar',
    template: `<div style="text-aling:center; align-items: center; align-content: center; text-align: center;">
            <span style="color:white; font-size: 16px; margin: 3px;"> 
                <strong style="margin: 5px;"> {{messajeContent}} </strong>
                <span class="icon-user" aria-hidden="true" style="font-size: 16px;"></span>
            </span>
        </div>`
})

export class CustomSnackbarComponent {

    messajeContent: any;

}


@Injectable({ providedIn: 'root' })
export class snackBarService{

    public setAutoHide: boolean = true;
    public autoHide: number = 2000;
    public horizontalPosition: MatSnackBarHorizontalPosition = "center";
    public verticalPosition:  MatSnackBarVerticalPosition = "bottom";

    constructor(public snackBar: MatSnackBar) {}


    open(message:string) {
        let snackbarRef = this.snackBar.openFromComponent(CustomSnackbarComponent,{
            duration: this.setAutoHide ? this.autoHide : 0,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition
        });
        snackbarRef.instance.messajeContent = message;        
    }

}
