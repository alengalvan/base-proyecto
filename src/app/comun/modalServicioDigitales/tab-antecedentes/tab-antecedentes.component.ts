import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Field } from '../../model/Field.model';

@Component({
  selector: 'app-tab-antecedentes',
  templateUrl: './tab-antecedentes.component.html',
  styleUrls: ['./tab-antecedentes.component.css']
})
export class TabAntecedentesComponent implements OnInit {

  @ViewChild('paginatorIL', {static: false}) paginatorIL: MatPaginator;
  @ViewChild('paginatorJL', {static: false}) paginatorJL: MatPaginator;
  @ViewChild('paginatorI', {static: false}) paginatorI: MatPaginator;
  @ViewChild('paginatorJF', {static: false}) paginatorJF: MatPaginator;
  @ViewChild('paginatorRP', {static: false}) paginatorRP: MatPaginator;

  @Input() dataIL;
  @Input() dataJL;
  @Input() dataI;
  @Input() dataJF;
  @Input() dataRP;

  public dataSourceIL = new MatTableDataSource();
  public dataSourceJL = new MatTableDataSource();
  public dataSourceI = new MatTableDataSource();
  public dataSourceJF = new MatTableDataSource();
  public dataSourceRP = new MatTableDataSource();
  
  public displayedColumnsInvestigacionLaboral: Field[]
  public displayedColumnsJuicioLaboral: Field[]
  public displayedColumnsInconformidad: Field[]
  public displayedColumnsJuicioFiscal: Field[]
  public displayedColumnsResponsabilidadPatrimonial: Field[]

  public columnNamesInvestigacionLaboral: string[];
  public columnNamesJuicioLaboral: string[];
  public columnNamesInconformidad: string[];
  public columnNamesJuicioFiscal: string[];
  public columnNamesResponsabilidadPatrimonial: string[];

  public lengthIL :number;
  public lengthJL :number;
  public lengthI :number;
  public lengthJF :number;
  public lengthRP :number;

  constructor() { }
  
  @HostListener('unloaded')
  ngOnDestroy(): void {    
    this.dataIL = null;
    this.dataJL = null;
    this.dataI = null;
    this.dataJF = null;
    this.dataRP = null;
    //console.log('Antecedentes destruido');
  }

  ngOnInit(): void {

    this.dataSourceIL.data = this.dataIL;
    this.lengthIL = this.dataSourceIL.data.length;

    this.dataSourceJL.data = this.dataJL;
    this.lengthJL = this.dataSourceJL.data.length;

    this.dataSourceI.data = this.dataI;
    this.lengthI = this.dataSourceI.data.length;

    this.dataSourceJF.data = this.dataJF;
    this.lengthJF = this.dataSourceJF.data.length;

    this.dataSourceRP.data = this.dataRP;
    this.lengthRP = this.dataSourceRP.data.length;

    this.displayedColumnsInvestigacionLaboral = [ 
      { name: 'numReporte', columName: 'No. de reporte'},
      { name: 'desDelegacion', columName: 'OOAD'},
      { name: 'matricula', columName: 'Matrícula'},
      { name: 'nombre', columName: 'Nombre'},
      { name: 'apellidoPaterno', columName: 'Apellido Paterno'},
      { name: 'apellidoMaterno', columName: 'Apellido Materno'},
    ];   
    this.columnNamesInvestigacionLaboral = this.displayedColumnsInvestigacionLaboral.map(x => x.name);

    this.displayedColumnsJuicioLaboral = [ 
      { name: 'desJunta', columName: 'Junta'},
      { name: 'numExpediente', columName: 'Expediente'},
      { name: 'anioExpediente', columName: 'Año'},
      { name: 'delAbrev', columName: 'OOAD'},
      { name: 'matricula', columName: 'Matrícula'},
      { name: 'ljlFase', columName: 'Estado Procesal'},
    ];   
    this.columnNamesJuicioLaboral = this.displayedColumnsJuicioLaboral.map(x => x.name);

    this.displayedColumnsInconformidad = [ 
      { name: 'cveExpediente', columName: 'Expediente'},
      { name: 'materia', columName: 'Matricula'},
      { name: 'desDependencia', columName: 'OOAD'},
      { name: 'edoProcesal', columName: 'Estado Procesal'},
      { name: 'claveIMSS', columName: 'Reg Pat / Nss'},
      { name: 'nombreInconforme', columName: 'Nombre'},
    ];   
    this.columnNamesInconformidad = this.displayedColumnsInconformidad.map(x => x.name);

    this.displayedColumnsJuicioFiscal = [ 
      { name: 'expedienteJuicioFiscal', columName: 'Expediente'},
      { name: 'desDelegacion', columName: 'OOAD'},
      { name: 'desSala', columName: 'Sala'},
      { name: 'estadoProcesal', columName: 'Estado Procesal'},
      { name: 'cveImssPersona', columName: 'Reg Pat / Nss'},
    ];   
    this.columnNamesJuicioFiscal = this.displayedColumnsJuicioFiscal.map(x => x.name);

    this.displayedColumnsResponsabilidadPatrimonial = [ 
      { name: 'numExpediente', columName: 'Expediente'},
      { name: 'delAbrev', columName: 'OOAD'},
      { name: 'ljlFase', columName: 'Estado Procesal'},
      { name: 'afiliacion', columName: 'Reg Pat / Nss'},
    ];   
    this.columnNamesResponsabilidadPatrimonial = this.displayedColumnsResponsabilidadPatrimonial.map(x => x.name);

  }

  ngAfterViewInit(): void {
    this.dataSourceIL.paginator = this.paginatorIL;
    this.dataSourceJL.paginator = this.paginatorJL;
    this.dataSourceI.paginator = this.paginatorI;
    this.dataSourceJF.paginator = this.paginatorJF;
    this.dataSourceRP.paginator = this.paginatorRP;
  }


}
