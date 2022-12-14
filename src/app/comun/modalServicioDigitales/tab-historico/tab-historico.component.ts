import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Field } from '../../model/Field.model';

@Component({
  selector: 'app-tab-historico',
  templateUrl: './tab-historico.component.html',
  styleUrls: ['./tab-historico.component.css']
})
export class TabHistoricoComponent implements OnInit {

  @ViewChild('paginatorP', {static: false}) paginatorP: MatPaginator;
  @ViewChild('paginatorD', {static: false}) paginatorD: MatPaginator;
  @ViewChild('paginatorH', {static: false}) paginatorH: MatPaginator;
  
  @Input() dataH;
  @Input() dataP;
  @Input() dataD;
  @Input() dataLE;
  @Input() dataA;
  @Input() etiqueta;

  public dataSourceH = new MatTableDataSource();
  public dataSourceP = new MatTableDataSource();
  public dataSourceD = new MatTableDataSource();
  
  public displayedColumns: Field[]
  public displayedColumnsPrestaciones: Field[]
  public displayedColumnsDiagnostico: Field[]
  

  public columnNames: string[];
  public columnNamesPrestaciones: string[];
  public columnNamesDiagnostico: string[];
  

  public lengthP :number;
  public lengthD :number;
  public lengthH :number;

  public lengthLE :number;
  public lengthA :number;
  
  constructor(

  ) { }

  ngAfterViewInit(): void {
    this.dataSourceP.paginator = this.paginatorP;
    this.dataSourceD.paginator = this.paginatorD;
    this.dataSourceH.paginator = this.paginatorH;
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.dataH = null;
    this.dataP = null;
    this.dataD = null;
    this.dataLE = null;
    this.dataA = null;
    //console.log('Servicios destruido');
  }

  ngOnInit(): void {

    this.dataSourceH.data = this.dataH;
    this.lengthH = this.dataSourceH.data.length;

    this.dataSourceP.data = this.dataP;
    this.lengthP = this.dataSourceP.data.length;

    this.dataSourceD.data = this.dataD;
    this.lengthD = this.dataSourceD.data.length;

    if(this.dataLE != null){
      this.lengthLE = this.dataLE.length;
    }else{
      this.lengthLE = 0;
    }

    if(this.dataA != null){
      this.lengthA = this.dataA.length;
    }else{
      this.lengthA = 0;
    }


    this.displayedColumns = [ 
      { name: 'nss', columName: 'NSS'},
      { name: 'curp', columName: 'CURP'},
      { name: 'salarioBase', columName: 'Salario Base'},
      { name: 'subrogacionServicio', columName: 'ID subrograci??n servicio'},
      { name: 'claveDelegacionOrigen', columName: 'Clave OOAD Origen'},
      { name: 'fechaInicioMovimiento', columName: 'Inicio de relaci??n laboral'},
      { name: 'fechaFinalMovimiento', columName: 'Termino de relaci??n laboral'}
    ];   
    this.columnNames = this.displayedColumns.map(x => x.name);

    this.displayedColumnsPrestaciones = [ 
      { name: 'caracterPension', columName: 'Caracter pensi??n'},
      { name: 'desCaracterPension', columName: 'Descripci??n caracter pensi??n'},
      { name: 'fechaConservacionDerechos73', columName: 'Conservaci??n de derechos 73'},
      { name: 'fechaConservacionDerechos97', columName: 'Conservaci??n de derechos 97'},
      { name: 'fechaInicioPension', columName: 'Inicio pensi??n'},
      { name: 'idAntecedente', columName: 'Id antecedente'},
      { name: 'desFormaPagoPension', columName: 'Descripci??n forma de pago pensi??n'},
      { name: 'desIncidenciaPension', columName: 'Descripci??n de incidencia de pensi??n'},
      { name: 'desRama', columName: 'Descripci??n rama'},
      { name: 'idRegimen', columName: 'Id reg??men'},
      { name: 'desTipoPension', columName: 'Descripci??n tipo de pensi??n'},
      { name: 'importeCuantiaPension', columName: 'Importe cuantia pensi??n'},
      { name: 'importeMensualPension', columName: 'Importe mensual pensi??n'},
      { name: 'numeroResolucion', columName: 'No. resoluci??n'},
      { name: 'salarioPromedio', columName: 'Salario promedio'},
      { name: 'semanasCotizadas', columName: 'Semanas cotizadas'},
      { name: 'importeAguinaldo', columName: 'Importe aguinaldo'}
    ];   
    this.columnNamesPrestaciones = this.displayedColumnsPrestaciones.map(x => x.name);


    this.displayedColumnsDiagnostico = [ 
      { name: 'idDiagnostico', columName: 'ID diagn??stico'},
      { name: 'porValuacion', columName: 'Porcentaje de pensi??n'},
      { name: 'desRiesgo', columName: 'Riesgo'},
      { name: 'cveRiesgo', columName: 'Clasificaci??n'},
      { name: 'desDiagnostico513', columName: 'Diagn??stico ST3'},
      { name: 'cveDiagnostico513', columName: 'Clave'},
      { name: 'desDiagnostico514', columName: 'Diagn??stico ST4'},
      { name: 'cveDiagnostico514', columName: 'Clave'},
    ];   
    this.columnNamesDiagnostico = this.displayedColumnsDiagnostico.map(x => x.name);
  }

}
