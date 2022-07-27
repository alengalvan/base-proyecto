import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TabHistoricoComponent } from './tab-historico/tab-historico.component';
import { TabAntecedentesComponent } from './tab-antecedentes/tab-antecedentes.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    TabHistoricoComponent,
    TabAntecedentesComponent
  ],
  exports:[
    TabHistoricoComponent,
    TabAntecedentesComponent 
  ],
  imports: [
    MatDialogModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    CommonModule
  ]
})
export class GenericServiceDigitalModule { }
