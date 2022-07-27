import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { GenericDialogComponent } from './genericDialog.component';
import { GenericDialogIncidenteComponent } from './incidente/genericDialogIncidente.component';
import { ReasignacionComponent } from './reasignacion/reasignacion.component';
import { ExcepcionComponent } from './excepcion/excepcion.component';

@NgModule({
  declarations: [
    GenericDialogComponent,
    GenericDialogIncidenteComponent,
    ReasignacionComponent,
    ExcepcionComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ]
})
export class GenericDialogModule { }
