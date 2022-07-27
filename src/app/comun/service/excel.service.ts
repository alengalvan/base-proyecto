import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { Workbook } from 'exceljs';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private datePipe: DatePipe) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'Hoja1': worksheet }, SheetNames: ['Hoja1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, `${fileName}_${moment().format('DD-MM-YYYY')}${EXCEL_EXTENSION}`);
  }

  row:number = 1
  col:number = 1

  generaExcel(json: any, excelFileName: string){

    try{
      let info = json.data;
      let header = [];
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('memoria de gestión');
      let data = [];
      let titulo:String;

      this.row = 1
      this.col = 1

      this.fillSeccionEncabezado(data,header,worksheet,info,titulo);
      titulo = "NOTIFICACIÓN DEL AMPARO INDIRECTO";
      this.fillSeccionNotificacion(data,header,worksheet,info,titulo);
      titulo = "ACUERDOS";
      this.fillSeccionAcuerdos(data,header,worksheet,info,titulo);
      titulo = "SUSPENSIÓN DE PLANO";
      this.fillSuspensionPlano(data,header,worksheet,info,titulo);
      titulo = "CUADERNO PRINCIPAL (INFORME JUSTIFICADO)";
      this.fillCuadernoPrinInfJust(data,header,worksheet,info,titulo);
      titulo = "REQUERIMIENTOS";
      this.fillRequerimientos(data,header,worksheet,info,titulo);
      titulo = "AMPLIACIÓN DE DEMANDA";
      this.fillAmpliacionDemanda(data,header,worksheet,info,titulo);
      titulo = "CUADERNO INCIDENTAL(INFORME PREVIO)";
      this.fillCuadernoIncInfPrev(data,header,worksheet,info,titulo);
      titulo = "SUSPENSIÓN PROVISIONAL";
       this.fillSuspensionProvisional(data,header,worksheet,info,titulo);
      titulo = "SUSPENSIÓN DEFINITIVA";
       this.fillSuspensionDifinitiva(data,header,worksheet,info,titulo);

       //GENERA RECURSO REVISIÓN IMMS/QUEJOSO DE LA SUSPENSIÓN
       this.fillRecursoRevImmsQuejosoSuspension(data,header,worksheet,info);

      titulo = "REQUERIMIENTOS EN EL INCIDENTE";
      this.fillSeccionReqIncidente(data,header,worksheet,info,titulo);
      titulo = "SENTENCIA";
      this.fillSeccionSentencia(data,header,worksheet,info,titulo);
      titulo = "RECURSO DE REVISIÓN SENTENCIA IMSS";
      this.fillRecursoRevImms(data,header,worksheet,info,titulo);
      titulo = "RECURSO DE REVISIÓN SENTENCIA QUEJOSO";
      this.fillSeccionRecursoRevQuejoso(data,header,worksheet,info,titulo);
      titulo = "RESOLUCIÓN DE RECURSO DE REVISIÓN SENTENCIA IMSS";
      this.fillSeccionResRecursoRevImss(data,header,worksheet,info,titulo);
      titulo = "RESOLUCIÓN DE RECURSO DE REVISIÓN SENTENCIA QUEJOSO";
      this.fillSeccionResRecursoRevQuejoso(data,header,worksheet,info,titulo);
      titulo = "MANIFESTACIONES";
      this.fillSeccionManifestaciones(data,header,worksheet,info,titulo);
      titulo = "INCOMPETENCIA";
      this.fillSeccionIncompetencia(data,header,worksheet,info,titulo);
      titulo = "ACUERDO DE FIRMEZA"
      this.fillSeccionAcuerdoFirmeza(data,header,worksheet,info,titulo);
      titulo = "CUMPLIMIENTO DE SENTENCIA"
      this.fillSeccionCumpSentencia(data,header,worksheet,info,titulo);
      titulo = "ACUERDO DE CUMPLIMIENTO"
      this.fillSeccionAcuerdoCumpSentencia(data,header,worksheet,info,titulo);
      titulo = "ACUERDO DE NO CUMPLIMIENTO"
      this.fillSeccionAcuerdoNoCumpSentencia(data,header,worksheet,info,titulo);

      var ajuste = 0.71
      worksheet.getColumn(1).width = 10.71 + ajuste;
      worksheet.getColumn(2).width = 6 + ajuste;
      worksheet.getColumn(3).width = 50.71 + ajuste;
      worksheet.getColumn(4).width = 10.71 + ajuste;
      worksheet.getColumn(5).width = 10.71 + ajuste;
      worksheet.getColumn(6).width = 40.71 + ajuste;
      worksheet.getColumn(7).width = 14.57 + ajuste;


      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        FileSaver.saveAs(blob, 'Memoria de gestión.xlsx');
      })

    }catch(error){
     console.log(error)
    }

  }

  fillSeccionNotificacion(data:any,header:any,worksheet:any,info:any,titulo:String){
    data.push(["  ","  ","Amparo contra",info?.ssccAmparoContra?.desNomAmparoContra]);
    info?.ssctQuejosoAsuntoAmparoIndirectos.forEach(qj=>{
      let tipoQj = qj?.ssctQuejosoAmparoIndirecto?.ssccTipoQuejoso;
      switch(tipoQj?.desTipoQuejoso){
        case 'Moral':
          data.push(["  ","  ","Tipo de quejoso",tipoQj?.desTipoQuejoso]);
          data.push(["  ","  ","Nombre del Representante",qj?.ssctQuejosoAmparoIndirecto?.refNombreQuejoso+" "+qj?.ssctQuejosoAmparoIndirecto?.refPaternoQuejoso+" "+qj?.ssctQuejosoAmparoIndirecto?.refMaternoQuejoso]);
          data.push(["  ","  ","Registro Patronal",qj?.ssctQuejosoAmparoIndirecto?.refRegistroPatronal]);
          break;
        case 'Otro':
          data.push(["  ","  ","Tipo de quejoso",tipoQj?.desTipoQuejoso]);
          data.push(["  ","  ","Nombre(s)",qj?.ssctQuejosoAmparoIndirecto?.refNombreQuejoso]);
          data.push(["  ","  ","Apellido Paterno",qj?.ssctQuejosoAmparoIndirecto?.refPaternoQuejoso]);
          data.push(["  ","  ","Apellido Materno",qj?.ssctQuejosoAmparoIndirecto?.refMaternoQuejoso]);
          break;
        case 'Física':
          data.push(["  ","  ","Tipo de quejoso",tipoQj?.desTipoQuejoso]);
          if(qj?.ssctQuejosoAmparoIndirecto?.indEsTrabajador){
            data.push(["  ","  ","Tipo","Matricula"]);
          }else if(qj?.ssctQuejosoAmparoIndirecto?.indEsAsegurado){
            data.push(["  ","  ","Tipo","NSS"]);
          }
          data.push(["  ","  ","Nombre(s)",qj?.ssctQuejosoAmparoIndirecto?.refNombreQuejoso]);
          data.push(["  ","  ","Apellido Paterno",qj?.ssctQuejosoAmparoIndirecto?.refPaternoQuejoso]);
          data.push(["  ","  ","Apellido Materno",qj?.ssctQuejosoAmparoIndirecto?.refMaternoQuejoso]);
          break;
      }
    });
    if(info.indSentidoAcuerdoAdmite){
      data.push(["  ","  ","Sentido del acuerdo inicial","Admite"]);
    }else if(info.indSentidoAcuerdoPreviene){
      data.push(["  ","  ","Sentido del acuerdo inicial","Previene"]);
    }
    data.push(["  ","  ","No de juicio de amparo",info?.numJuicioAmparo+"/"+info?.numAnioJuicioAmparo]);
    data.push(["  ","  ","Juzgado de distrito",info?.ssccJuzgado.nomJuzgado]);
    data.push(["  ","  ","Fecha de notificación",this.datePipe.transform(info?.fecNotificacion, 'dd/MM/yyyy')]);

    this.validaVacio(header,titulo,worksheet,data);
  }

  fillSeccionAcuerdos(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    let cont = 0;
    info?.ssctCuadernoPrincAmparoIndirectos?.forEach(cu=>{
      if(this.valida(cu?.ssctOficioAcuerdoAmparoIndirectos)){
        cont++;
        data.push(["  ",cont,"No. Oficio del acuerdo",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.numOficioAcuerdo]);
        data.push(["  "," ","Fecha del acuerdo", this.datePipe.transform(cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.fecAcuerdo, 'dd/MM/yyyy')]);
        data.push(["  "," ","Tercero interesado",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.indEsTerceroInteresado==0?"NO":"SI"]);
        data.push(["  "," ","Autoridad responsable",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssccAutoridad?.desNomAutoridad]);
        data.push(["  "," ","Cuaderno","Principal"]);
        data.push(["  "," ","Fecha de audiencia constitucional",this.datePipe.transform(cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.fecAudienciaPrincipal, 'dd/MM/yyyy')]);
      }
    })
    info?.ssctCuadernoIncidAmparoIndirectos?.forEach(cu=>{
      if(this.valida(cu.ssctOficioAcuerdoAmparoIndirectos)){
        cont++;
        data.push(["  ",cont,"No. Oficio del acuerdo",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.numOficioAcuerdo]);
        data.push(["  "," ","Fecha del acuerdo",this.datePipe.transform(cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.fecAcuerdo, 'dd/MM/yyyy')]);
        data.push(["  "," ","Tercero interesado",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.indEsTerceroInteresado==0?"NO":"SI"]);
        data.push(["  "," ","Autoridad responsable",cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssccAutoridad?.desNomAutoridad]);
        data.push(["  "," ","Cuaderno","Incidental"]);
        data.push(["  "," ","Fecha de audiencia incidental",this.datePipe.transform(cu?.ssctOficioAcuerdoAmparoIndirectos[0]?.fecAudienciaIncidental, 'dd/MM/yyyy')]);
      }
    })
    if(data.length >0){
      this.validaVacio(header,titulo,worksheet,data);
    }
  }

  fillSuspensionPlano(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    let cont = 0;
    if(info.ssctSuspPlanoAmparoIndirectos != undefined && info.ssctSuspPlanoAmparoIndirectos instanceof  Array
      &&  info.ssctSuspPlanoAmparoIndirectos.length > 0){
        info.ssctSuspPlanoAmparoIndirectos[0]?.ssctOficioDesSuspPlanoAmparoIndirectos?.forEach(sus=>{
          cont++;
          data.push(["  ",cont,"Autoridad Responsable",sus?.ssccAutoridad?.desNomAutoridad]);
          data.push(["  "," ","Fecha de vencimiento",this.datePipe.transform(sus?.fecVencimiento, 'dd/MM/yyyy')]);
          data.push(["  "," ","Para efectos de",sus?.desParaEfectosDe]);
          data.push(["  "," ","No. De oficio de desahogo",sus?.numOficioDesahogo]);
          data.push(["  "," ","Fecha de oficio",this.datePipe.transform(sus?.fecOficioDesahogo, 'dd/MM/yyyy')]);
          data.push(["  "," ","Documentos",sus?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
        });
        this.validaVacio(header,titulo,worksheet,data);
      }
  }

  fillCuadernoPrinInfJust(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    if(info?.ssctCuadernoPrincAmparoIndirectos != undefined && info?.ssctCuadernoPrincAmparoIndirectos instanceof  Array
      &&  info?.ssctCuadernoPrincAmparoIndirectos?.length > 0){
        info?.ssctCuadernoPrincAmparoIndirectos?.forEach(cuaderno =>{
          let oficioAc = cuaderno?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssctInfJustCuadernoPrincAmparoIndirectos[0];
          if (oficioAc){
            data.push(["  "," ","Fecha de vencimiento",this.datePipe.transform(oficioAc?.fecVencimiento, 'dd/MM/yyyy')]);
            data.push(["  "," ","Juzgado de distrito",oficioAc?.ssccJuzgado?.nomJuzgado]);
            data.push(["  "," ","Autoridad responsable",oficioAc?.ssccAutoridad?.desNomAutoridad]);
            data.push(["  "," ","Informe",oficioAc?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
            this.validaVacio(header,titulo,worksheet,data);
          }
        })
      }
  }

  fillRequerimientos(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    let cont = 0;
    if(info.ssctRequerimientoAmparoIndirectos != undefined && info.ssctRequerimientoAmparoIndirectos instanceof  Array
      &&  info.ssctRequerimientoAmparoIndirectos.length > 0){
        cont++;
        info.ssctRequerimientoAmparoIndirectos?.forEach(req=>{
          if(req?.fecBaja==null){
            data.push(["  ",cont,"Tipo de requerimiento",req?.ssccTipoRequerimientoByCveTipoRequerimientoNotif?.desTipoRequerimiento]);
            data.push(["  "," ","Fecha de acuerdo",this.datePipe.transform(req?.fecAcuerdoNotif, 'dd/MM/yyyy')]);
            data.push(["  "," ","Fecha de notificación",this.datePipe.transform(req?.fecNotificacion, 'dd/MM/yyyy')]);
            data.push(["  "," ","Fecha de vencimiento",this.datePipe.transform(req?.fecVencimientoNotif, 'dd/MM/yyyy')]);
            data.push(["  "," ","Se desahogó requerimiento",req?.indDesahogoRequerimientoNotif ? "Si":"No"]);
            data.push(["  "," ","No. Oficio de desahogo",req?.numOficioDesahogo]);
            data.push(["  "," ","Fecha de oficio",this.datePipe.transform(req?.fecOficioDesahogo, 'dd/MM/yyyy')]);
          }
        })
        this.validaVacio(header,titulo,worksheet,data);
      }
  }

  fillAmpliacionDemanda(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    if(info.ssctAmplDemandaAmparoIndirectos != undefined && info.ssctAmplDemandaAmparoIndirectos instanceof  Array
      &&  info.ssctAmplDemandaAmparoIndirectos.length > 0){
        info.ssctAmplDemandaAmparoIndirectos.forEach(dem=>{
          data.push(["  "," ","Existe ampliación de demanda","Si"]);
          data.push(["  "," ","No. Oficio",dem?.numOficio]);
          data.push(["  "," ","Fecha del acuerdo",this.datePipe.transform(dem?.fecAcuerdo, 'dd/MM/yyyy')]);
          data.push(["  "," ","Fecha de notificación",this.datePipe.transform(dem?.fecNotificacion, 'dd/MM/yyyy')]);
          data.push(["  "," ","Autoridad responsable",dem?.ssccAutoridad?.desNomAutoridad]);
          data.push(["  "," ","Acto reclamado",dem?.desActoReclamado]);
        })
        this.validaVacio(header,titulo,worksheet,data);
      }
  }

  fillCuadernoIncInfPrev(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    let cont = 0;
    if(info.ssctCuadernoIncidAmparoIndirectos != undefined && info.ssctCuadernoIncidAmparoIndirectos instanceof  Array
      &&  info.ssctCuadernoIncidAmparoIndirectos.length > 0){
        info.ssctCuadernoIncidAmparoIndirectos?.forEach(item=>{
          cont++;
          data.push(["  ",cont,"Fecha de vencimiento",this.datePipe.transform(item?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssctInfPrevCuadernoIncidAmparoIndirectos[0]?.fecVencimiento, 'dd/MM/yyyy')]);
          data.push(["  "," ","Juzgado de distrito",item?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssctInfPrevCuadernoIncidAmparoIndirectos[0]?.ssccJuzgado?.nomJuzgado]);
          data.push(["  "," ","Autoridad responsable",item?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssccAutoridad.desNomAutoridad]);
          data.push(["  "," ","Amparo indirecto",item?.ssctOficioAcuerdoAmparoIndirectos[0]?.ssctInfPrevCuadernoIncidAmparoIndirectos[0]?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
        })
        this.validaVacio(header,titulo,worksheet,data);
      }

  }

  fillSuspensionProvisional(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    if(info.ssctCuadernoIncidAmparoIndirectos != undefined && info.ssctCuadernoIncidAmparoIndirectos instanceof  Array
      &&  info.ssctCuadernoIncidAmparoIndirectos.length > 0){
        if(info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.indConcedioSuspProv){
          data.push(["  "," ","Se concedió suspensión provisional",info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.indConcedioSuspProv?"Si":"No"]);
        }
        data.push(["  "," ","Para efectos",info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.desParaEfectosDe]);
        if(info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.indInterpusoRecQueja){
          data.push(["  "," ","Recurso de queja",info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.indInterpusoRecQueja?"Si":"No"]);
        }
        data.push(["  "," ","Fecha de vencimiento",this.datePipe.transform(info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.fecVencimiento, 'dd/MM/yyyy')]);
        data.push(["  "," ","Tribunal colegiado",info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.ssccTribunalColegiado?.nomTribunalColegiado]);
        let tf= info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.numTocaFolio;
        let ta=info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.numTocaAnio;
        data.push(["  "," ","Toca",tf != undefined?tf:""+"/"+ta != undefined?ta:""]);
        data.push(["  "," ","Fecha de resolución ",this.datePipe.transform(info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.fecResolucion, 'dd/MM/yyyy')]);
        data.push(["  "," ","Fecha de notificación ",this.datePipe.transform(info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.fecNotificacion, 'dd/MM/yyyy')]);
        data.push(["  "," ","Sentido de la resolución ",info.ssctCuadernoIncidAmparoIndirectos[0]?.ssctSuspProvisionalAmparoIndirectos[0]?.ssccSentidoSuspProvAmparoIndirecto?.desSentidoSuspProvAmparoIndirecto]);
        this.validaVacio(header,titulo,worksheet,data);
      }

  }

  fillSuspensionDifinitiva(data:any,header:any,worksheet:any,info:any,titulo:String){

    if(this.valida(info.ssctCuadernoIncidAmparoIndirectos)){
      for (let index = 0; index < info.ssctCuadernoIncidAmparoIndirectos.length; index++) {
        var cuaderno = info.ssctCuadernoIncidAmparoIndirectos[index];
        if(this.valida(cuaderno.ssctSuspDefinitivaAmparoIndirectos)){
          var suspension = cuaderno.ssctSuspDefinitivaAmparoIndirectos[0]
          data=[];
          data.push([" "," ","Fecha de la audiencia incidental",this.datePipe.transform(suspension?.fecAudIncidental, 'dd/MM/yyyy')]);
          data.push([" "," ","Diferimiento de audiencia",suspension.fecDiferimientoAud != null ? suspension.fecDiferimientoAud : '']);
          data.push([" "," ","Fecha de la sentencia",this.datePipe.transform(suspension?.fecSentencia, 'dd/MM/yyyy')]);
          data.push([" "," ","Fecha de notificación",this.datePipe.transform(suspension?.fecNotificacion, 'dd/MM/yyyy')]);
          data.push([" "," ","Sentido de suspensión definitiva",suspension?.ssccSentidoSuspDefAmparoIndirecto?.desSentidoSuspDefAmparoIndirecto]);
          data.push([" "," ","Para efectos",suspension?.desParaEfectosDe]);
          data.push([" "," ","Suspensión",suspension?.ssctRecursoRevSuspDefAmparoIndirectos[0]?.ssctDocumentoDigitalizadoAmparoIndirectoByCveDocRecRevSuspDefQuejoso?.refNombreArchivoFs]);
          this.validaVacio(header,titulo,worksheet,data);
          break
        }
      }}}

  fillRecursoRevImms(data:any,header:any,worksheet:any,info:any,titulo:String){
    data=[];
    if(info.ssctSentenciaAmparoIndirectos != undefined && info.ssctSentenciaAmparoIndirectos instanceof  Array
      &&  info.ssctSentenciaAmparoIndirectos.length > 0){
        let revRec = info.ssctSentenciaAmparoIndirectos[0]?.ssctRecursoRevSentenciaAmparoIndirectos[0];
        let promovente = revRec?.ssccPromoventeAmparoIndirecto?.desPromovente;
        if(promovente == 'IMSS' || promovente =='QUEJOSO' || promovente =='Quejoso'){
          data.push([" "," ","Promovió el IMSS recurso de revisión", promovente =='IMSS'?"Si":"No"]);
        }
        data.push([" "," ","Fecha de vencimiento",this.datePipe.transform(revRec?.fecVencimientoImss, 'dd/MM/yyyy')]);
        data.push([" "," ","Fecha de presentación",this.datePipe.transform(revRec?.fecPresentacionImss, 'dd/MM/yyyy')]);
        data.push([" "," ","No. De acuerdo de admisión",revRec?.numOficioAcuerdoImss]);
        data.push([" "," ","Fecha del acuerdo",this.datePipe.transform(revRec?.fecAcuerdoImss, 'dd/MM/yyyy')]);
        data.push([" "," ","Fecha de notificación",this.datePipe.transform(revRec?.fecNotificacionImss, 'dd/MM/yyyy')]);
        data.push([" "," ","Sentido de admisión",revRec?.ssccSentidoAcuerdoAmparoIndirectoByCveSentidoSentenciaImss?.desSentidoAcuerdoAmparoIndirecto]);
        data.push([" "," ","Tribunal colegiado",revRec?.ssccTribunalColegiadoByCveTribunalColegiadoImss?.nomTribunalColegiado]);
        let folio = revRec?.numTocaFolioImss;
        let anio = revRec?.numTocaAnioImss;
        data.push([" "," ","Toca",folio != undefined?folio:""+"/"+anio != undefined?anio:""]);
        this.validaVacio(header,titulo,worksheet,data);
      }

  }

  fillRecursoRevImmsQuejosoSuspension(data:any,header:any,worksheet:any,info:any){
    data=[];
    if(info.ssctCuadernoIncidAmparoIndirectos != undefined && info.ssctCuadernoIncidAmparoIndirectos instanceof  Array
      &&  info.ssctCuadernoIncidAmparoIndirectos.length > 0){

        info.ssctCuadernoIncidAmparoIndirectos.forEach(cuaderno=>{
          let suspDef=cuaderno?.ssctSuspDefinitivaAmparoIndirectos;
          if(this.valida(suspDef)){
            let recursoRevision = suspDef[0]?.ssctRecursoRevSuspDefAmparoIndirectos;
            if(this.valida(recursoRevision)){
              let numAcuerdoImms = recursoRevision[0]?.numAcuerdoAdmisionImss;
              let numAcuerdoQuejoso = recursoRevision[0]?.numAcuerdoAdmisionQuejoso;
              if(numAcuerdoImms){
                data.push([" "," ","Promovió el IMSS recurso de revisión","SI"]);
                data.push([" "," ","Fecha de vencimiento",this.datePipe.transform(recursoRevision[0]?.fecVencimientoImss, 'dd/MM/yyyy')]);
                data.push([" "," ","Fecha de presentación",this.datePipe.transform(recursoRevision[0]?.fecPresentacionImss, 'dd/MM/yyyy')]);
                data.push([" "," ","No. De acuerdo de admisión",recursoRevision[0]?.numAcuerdoAdmisionImss]);
                data.push([" "," ","Fecha del acuerdo",this.datePipe.transform(recursoRevision[0]?.fecAcuerdoImss, 'dd/MM/yyyy')]);
                data.push([" "," ","Fecha de notificación",this.datePipe.transform(recursoRevision[0]?.fecNotificacionImss, 'dd/MM/yyyy')]);
                data.push([" "," ","Sentido de admisión",recursoRevision[0]?.indSentAdmAdmiteImss?"ADMITE":"DESECHA"]);
                data.push([" "," ","Tribunal colegiado",recursoRevision[0]?.ssccTribunalColegiadoByCveTribunalColegiadoImss?.nomTribunalColegiado]);
                let folio = recursoRevision[0]?.numTocaFolioImss?.toString();
                let anio = recursoRevision[0]?.numTocaAnioImss?.toString();
                data.push([" "," ","Toca",folio+"/"+anio]);
                this.validaVacio(header,"RECURSO DE REVISIÓN SUSPENSIÓN DEFINITIVA IMSS",worksheet,data);
              }
              if(numAcuerdoQuejoso){
                data=[];
                data.push([" "," ","Promovió el QUEJOSO recurso de revisión","SI"]);
                // data.push([" "," ","Fecha de vencimiento",this.datePipe.transform(recursoRevision[0]?.fecVencimientoImss, 'dd/MM/yyyy')]);
                // data.push([" "," ","Fecha de presentación",this.datePipe.transform(recursoRevision[0]?.fecPresentacionImss, 'dd/MM/yyyy')]);
                data.push([" "," ","No. De acuerdo de admisión",recursoRevision[0]?.numAcuerdoAdmisionQuejoso]);
                data.push([" "," ","Fecha del acuerdo",this.datePipe.transform(recursoRevision[0]?.fecAcuerdoQuejoso, 'dd/MM/yyyy')]);
                data.push([" "," ","Fecha de notificación",this.datePipe.transform(recursoRevision[0]?.fecNotificacionQuejoso, 'dd/MM/yyyy')]);
                data.push([" "," ","Sentido de admisión",recursoRevision[0]?.indSentAdmAdmiteQuejoso?"ADMITE":"DESECHA"]);
                data.push([" "," ","Tribunal colegiado",recursoRevision[0]?.ssccTribunalColegiadoByCveTribunalColegiadoQuejoso?.nomTribunalColegiado]);
                let folio = recursoRevision[0]?.numTocaFolioQuejoso?.toString();
                let anio = recursoRevision[0]?.numTocaAnioQuejoso?.toString();
                data.push([" "," ","Toca",folio+"/"+anio]);
                this.validaVacio(header,"RECURSO DE REVISIÓN SUSPENSIÓN DEFINITIVA QUEJOSO",worksheet,data);
              }
              if(this.valida(recursoRevision[0]?.ssctResolucionRecRevSuspDefAmparoIndirectos)){
                let resolSusp = recursoRevision[0]?.ssctResolucionRecRevSuspDefAmparoIndirectos[0];
                let promovente = resolSusp?.ssccPromoventeAmparoIndirecto?.cvePromovente;
                if(promovente){
                  data=[];
                  data.push([" ","  ","Tribunal colegiado", resolSusp?.ssccTribunalColegiado?.nomTribunalColegiado]);
                  data.push([" ","  ","Toca", resolSusp?.numToca]);
                  data.push([" ","  ","Fecha de resolución ", this.datePipe.transform(resolSusp?.fecResolucion, 'dd/MM/yyyy')]);
                  data.push([" ","  ","Fecha de notificación", this.datePipe.transform(resolSusp?.fecNotificacion, 'dd/MM/yyyy')]);
                  data.push([" ","  ","Sentido de resolución", resolSusp?.indSentResConfirma?"CONFIRMA":"REVOCA"]);
                  data.push([" ","  ","Resolución", resolSusp?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
                  if(promovente ==1){
                    this.validaVacio(header,"RESOLUCIÓN DE RECURSO DE REVISIÓN SUSPENSIÓN DEFINITIVA IMSS",worksheet,data);
                  }else if(promovente ==2){
                    this.validaVacio(header,"RESOLUCIÓN DE RECURSO DE REVISIÓN QUEJOSO (SUSPENSIÓN DEFINITIVA)",worksheet,data);
                  }
                }
              }
            }
          }
        })
      }

  }

  validaVacio(header:any,titulo:String,worksheet:any,data:any){
    let dataTmp = data;
    dataTmp.forEach((dato,index) =>{
      let value = dato[3];
      if( value ==" " || value =="" || value == undefined || value == null){
        data = data.filter(item => item !== dato);
      }
    })
    if(data.length >0){
      this.addRows(header,titulo,worksheet,data);
    }
  }

    addRows(header:any,titulo:String,worksheet:any,data:any){
    var t = {
      richText: [
        {font: {bold: true},text: titulo}
      ]
    };
    var cellMerge = this.mergedCells(worksheet,this.row,1,this.row,7,t)
    let headerRow = worksheet.getRow(this.row);
    this.pintaCeldas(headerRow);
    this.row+=1
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let row = worksheet.addRow(element);
      this.mergedCells(worksheet,this.row,4,this.row,6,element[3])
      this.borderCell([row.getCell(3),row.getCell(4)])
      this.row+=1
    }
  }

    pintaCeldas(headerRow:any){
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '00BDD7EE' },
      }

    })
  }

  fillSeccionEncabezado(data:any,header:any,worksheet:any,info:any,titulo:String){

    this.addEmptyRow(worksheet,8)
    var rowIn = 2
    var colIn = 1
    data=[];
    let numJuicio = this.fillString(info?.numJuicioAmparo.toString());
    let anioJuicio = this.fillString(info?.numAnioJuicioAmparo.toString());
    let cveJuzgado = this.fillString(info?.ssccJuzgado?.cveJuzgado.toString());
    let numExpediente = numJuicio+"/"+anioJuicio+"/"+cveJuzgado;
    let numJuicioanio = numJuicio+"/"+anioJuicio;

    data.push([numExpediente,"No. Expediente"]);
    data.push([info?.ssccDelegacion?.desDelegacion,"OOAD"]);
    let juzgado=info?.ssccJuzgado?.nomJuzgado;
    data.push([juzgado?juzgado:" ","Juzgado de distrito"]);
    data.push([numJuicioanio,"No. Juicio de amparo"]);
    data.push([this.datePipe.transform(info?.fecNotificacion, 'dd/MM/yyyy'),"Fecha de notificación"]);
    data.push([info?.ssccUsuarioByCveUsuarioAbogadoResponsable?.ssccPersona?.nombreCompleto,"Abogado"]);

    for (let index = 0; index < data.length; index++) {
      var cellMerge = this.mergedCells(worksheet,rowIn,colIn+2,rowIn,colIn+4,data[index][0])
      this.borderCell([cellMerge])
      const row = worksheet.getRow(rowIn);
      var cell = row.getCell(colIn +5)
      cell.value = data[index][1]
      this.borderCell([cell])
      rowIn+=1
    }
  }

  fillString(cade:String){
    let sizeCade = cade.length;
    if(sizeCade<4 && sizeCade>0){
      for (let i = 1; i <=(4-sizeCade); i++) {
        cade = "0"+cade;
      }
    }
    return cade;
  }


  fillSeccionRecursoRevQuejoso(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
     var recRevList = info.ssctSentenciaAmparoIndirectos[0].ssctRecursoRevSentenciaAmparoIndirectos
     if(this.valida(recRevList)){
       var recRev = recRevList[0]
       if(recRev.fecAcuerdoQuejoso != null){
        data=[];
        data.push([" " ,"  ","Fecha de vencimiento", this.datePipe.transform(recRev?.fecVencimientoQuejoso, 'dd/MM/yyyy')]);
        data.push([" " ,"  ","Fecha de presentación", this.datePipe.transform(recRev?.fecPresentacionQuejoso, 'dd/MM/yyyy')]);
        data.push([" " ,"  ","No. De acuerdo de admisión", recRev?.numOficioAcuerdoQuejoso]);
        data.push([" " ,"  ","Fecha del acuerdo", this.datePipe.transform(recRev?.fecAcuerdoQuejoso, 'dd/MM/yyyy')]);
        data.push([" " ,"  ","Fecha de notificación", this.datePipe.transform(recRev?.fecNotificacionQuejoso, 'dd/MM/yyyy')]);
        data.push([" " ,"  ","Sentido de admisión",recRev?.ssccSentidoAcuerdoAmparoIndirectoByCveSentidoSentenciaQuejoso?.desSentidoAcuerdoAmparoIndirecto]);
        data.push([" " ,"  ","Tribunal colegiado",recRev?.ssccTribunalColegiadoByCveTribunalColegiadoQuejoso?.nomTribunalColegiado]);
        data.push([" " ,"  ","Toca", recRev?.numTocaFolioQuejoso + '/' +  recRev?.numTocaAnioQuejoso]);
        data.push([" " ,"  ","Notificación del recurso de revisión", recRev?.ssctDocumentoDigitalizadoAmparoIndirectoByCveDocRecRevSentenQuejoso?.refNombreArchivoFs]);
        this.addRows(header,titulo,worksheet,data);
       }
     }
    }
  }

  fillSeccionResRecursoRevImss(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
      var sentencia = info.ssctSentenciaAmparoIndirectos[0]
      if(this.valida(sentencia.ssctRecursoRevSentenciaAmparoIndirectos)){
        var recurso = sentencia.ssctRecursoRevSentenciaAmparoIndirectos[0]
        if(this.valida(recurso.ssctResolucionRecRevSentAmparoIndirectos)){
          for (let index = 0; index < recurso.ssctResolucionRecRevSentAmparoIndirectos.length; index++) {
            const resolucion = recurso.ssctResolucionRecRevSentAmparoIndirectos[index];
            if(resolucion.ssccPromoventeAmparoIndirecto.cvePromovente == 1){
              data=[];
              data.push([" ","  ","Tribunal colegiado", resolucion.ssccTribunalColegiado.nomTribunalColegiado]);
              data.push([" ","  ","Toca", resolucion.numToca]);
              data.push([" ","  ","Fecha de resolución ", this.datePipe.transform(resolucion?.fecResolucion, 'dd/MM/yyyy')]);
              data.push([" ","  ","Fecha de notificación", this.datePipe.transform(resolucion?.fecNotificacion, 'dd/MM/yyyy')]);
              data.push([" ","  ","Sentido de resolución", resolucion?.ssccSentidoResolucionAmparoIndirecto?.desSentidoResolucion]);
              data.push([" ","  ","Resolución", resolucion?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
              this.addRows(header,titulo,worksheet,data);
            }
          }
        }
      }
    }
  }

  fillSeccionResRecursoRevQuejoso(data:any,header:any,worksheet:any,info:any,titulo:String){

    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
      var sentencia = info.ssctSentenciaAmparoIndirectos[0]
      if(this.valida(sentencia.ssctRecursoRevSentenciaAmparoIndirectos)){
        var recurso = sentencia.ssctRecursoRevSentenciaAmparoIndirectos[0]
        if(this.valida(recurso.ssctResolucionRecRevSentAmparoIndirectos)){
          for (let index = 0; index < recurso.ssctResolucionRecRevSentAmparoIndirectos.length; index++) {
            const resolucion = recurso.ssctResolucionRecRevSentAmparoIndirectos[index];
            if(resolucion.ssccPromoventeAmparoIndirecto.cvePromovente == 2){
              data=[];
              data.push([" ","  ","Tribunal colegiado", resolucion.ssccTribunalColegiado?.nomTribunalColegiado]);
              data.push([" ","  ","Toca", resolucion?.numToca]);
              data.push([" ","  ","Fecha de resolución ", this.datePipe.transform(resolucion?.fecResolucion, 'dd/MM/yyyy')]);
              data.push([" ","  ","Fecha de notificación", this.datePipe.transform(resolucion?.fecNotificacion, 'dd/MM/yyyy')]);
              data.push([" ","  ","Sentido de resolución", resolucion?.ssccSentidoResolucionAmparoIndirecto?.desSentidoResolucion]);
              data.push([" ","  ","Resolución", resolucion?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
              this.addRows(header,titulo,worksheet,data);
            }
          }
        }
      }
    }
  }

  fillSeccionReqIncidente(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctCuadernoIncidAmparoIndirectos)){
      for (let index = 0; index < info.ssctCuadernoIncidAmparoIndirectos.length; index++) {
        const cuaInc = info.ssctCuadernoIncidAmparoIndirectos[index];
        if(this.valida(cuaInc.ssctSuspDefinitivaAmparoIndirectos)){
          for (let index = 0; index < cuaInc.ssctSuspDefinitivaAmparoIndirectos.length; index++) {
            const suspension = cuaInc.ssctSuspDefinitivaAmparoIndirectos[index];
            if(this.valida(suspension.ssctRequerimientoIncidenteAmparoIndirectos)){
              data=[];
              let cont=0;
              for (let index = 0; index < suspension.ssctRequerimientoIncidenteAmparoIndirectos.length; index++) {
                const requerimiento = suspension.ssctRequerimientoIncidenteAmparoIndirectos[index];
                if(requerimiento?.fecBaja == null){
                  if(index ==0){
                    data.push(["  ","  ","Hay requerimientos","SI"]);
                  }
                  cont++;
                  data.push([" ",cont,"No. De oficio",requerimiento.numOficio]);
                  data.push([" ","  ","Fecha del acuerdo",this.datePipe.transform(requerimiento?.fecAcuerdo, 'dd/MM/yyyy')]);
                  data.push([" ","  ","Fecha de notificación",this.datePipe.transform(requerimiento?.fecNotificacion, 'dd/MM/yyyy')]);
                  data.push([" ","  ","Observaciones",requerimiento?.desObservaciones]);
                }
              }
              this.validaVacio(header,"REQUERIMIENTOS EN EL INCIDENTE",worksheet,data);
            }
          }
        }

      }
    }
  }

  fillSeccionSentencia(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
        // var sentencia =  info.ssctSentenciaAmparoIndirectos[0]
        data=[];
        let cont=0;
        info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
          if(!sentencia?.isHistorico){
            cont++;
            data.push([" ",cont,"Fecha de sentencia", this.datePipe.transform(sentencia.fecSentencia, 'dd/MM/yyyy')]);
            data.push([" ","  ","Fecha de notificación",this.datePipe.transform(sentencia.fecNotificacion, 'dd/MM/yyyy')]);
            data.push([" ","  ","Sentido de la sentencia", sentencia.ssccSentidoSentenciaAmparoIndirecto.desSentidoSentenciaAmparoIndirecto]);
            if(this.valida(sentencia.ssctAutoridadSentenciaAmparoIndirectos)){
                for (let index = 0; index < sentencia.ssctAutoridadSentenciaAmparoIndirectos.length; index++) {
                  const autoridad = sentencia.ssctAutoridadSentenciaAmparoIndirectos[index];
                  data.push([" ","  ","Autoridad responsable", autoridad?.ssccSentidoSentenciaAmparoIndirecto?.desSentidoSentenciaAmparoIndirecto]);
                }
            }
            data.push([" ","  ","Para efectos de", sentencia?.desParaEfectosDe]);
            data.push([" ","  ","Sentencia", sentencia?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
            data.push([" ","  ","Fecha de vencimiento para interponer recurso de revisión",this.datePipe.transform(sentencia?.fecVencimientoRecRev, 'dd/MM/yyyy')]);
          }
        })
        info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
          if(sentencia?.isHistorico){
            cont++;
            data.push([" ",cont,"Fecha de sentencia", this.datePipe.transform(sentencia.fecSentencia, 'dd/MM/yyyy')]);
            data.push([" ","  ","Fecha de notificación",this.datePipe.transform(sentencia.fecNotificacion, 'dd/MM/yyyy')]);
            data.push([" ","  ","Sentido de la sentencia", sentencia.ssccSentidoSentenciaAmparoIndirecto.desSentidoSentenciaAmparoIndirecto]);
            if(this.valida(sentencia.ssctAutoridadSentenciaAmparoIndirectos)){
                for (let index = 0; index < sentencia.ssctAutoridadSentenciaAmparoIndirectos.length; index++) {
                  const autoridad = sentencia.ssctAutoridadSentenciaAmparoIndirectos[index];
                  data.push([" ","  ","Autoridad responsable", autoridad?.ssccSentidoSentenciaAmparoIndirecto?.desSentidoSentenciaAmparoIndirecto]);
                }
            }
            data.push([" ","  ","Para efectos de", sentencia?.desParaEfectosDe]);
            data.push([" ","  ","Sentencia", sentencia?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
            data.push([" ","  ","Fecha de vencimiento para interponer recurso de revisión",this.datePipe.transform(sentencia?.fecVencimientoRecRev, 'dd/MM/yyyy')]);
          }
        })
        this.addRows(header,titulo,worksheet,data);
    }
  }

  //tercero interesado
  fillSeccionManifestaciones(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctTerceroIntAmparoIndirectos)){
      var tercero = info.ssctTerceroIntAmparoIndirectos[0]
      data=[];
      data.push([" ","  ","Fecha de vencimiento",this.datePipe.transform(tercero?.fecVencimiento, 'dd/MM/yyyy')]);
      data.push([" ","  ","Se presentan manifestaciones",tercero?.indPresentaronManifestaciones ? 'SI': 'NO']);
      data.push([" ","  ","Fecha de presentación",this.datePipe.transform(tercero?.fecPresentacion, 'dd/MM/yyyy')]);
      data.push([" ","  ","Documentos",tercero?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
      this.addRows(header,titulo,worksheet,data);
    }
  }

  fillSeccionIncompetencia(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctIncompetenciaAmparoIndirectos)){
      var incompetencia = info.ssctIncompetenciaAmparoIndirectos[0]
      data=[];
      data.push([" ","  ","No. De oficio",incompetencia?.numOficioJuzIncomp]);
      data.push([" ","  ","Fecha del acuerdo",this.datePipe.transform(incompetencia?.fecAcuerdoJuzIncomp, 'dd/MM/yyyy')]);
      data.push([" ","  ","Fecha de notificación",this.datePipe.transform(incompetencia?.fecNotificacionJuzIncomp, 'dd/MM/yyyy')]);
      data.push([" ","  ","Documentos",incompetencia?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
      data.push([" ","  ","Se aceptó competencia",incompetencia?.indAceptoCompetencia ? 'SI': 'NO']);
      data.push([" ","  ","No. De oficio",incompetencia?.numOficioDerivado]);
      data.push([" ","  ","Fecha del acuerdo",this.datePipe.transform(incompetencia?.fecAcuerdoDerivado, 'dd/MM/yyyy')]);
      data.push([" ","  ","Fecha de notificación",this.datePipe.transform(incompetencia?.fecNotificacionDerivado, 'dd/MM/yyyy')]);
      data.push([" ","  ","No. De juicio de amparo",incompetencia?.numJuicioDerivado]);
      data.push([" ","  ","Juzgado de distrito",incompetencia?.ssccJuzgado?.nomJuzgado]);
      this.addRows(header,titulo,worksheet,data);
    }
  }

  fillSeccionAcuerdoFirmeza(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
    //   var sentencia = info.ssctSentenciaAmparoIndirectos[0]
      info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
        if(!sentencia?.isHistorico){
            if(this.valida(sentencia.ssctCumplimientoSentenciaAmparoIndirectos) ){
                for (let index = 0; index < sentencia.ssctCumplimientoSentenciaAmparoIndirectos.length; index++) {
                  var cumplimiento = sentencia.ssctCumplimientoSentenciaAmparoIndirectos[index];
                  if(cumplimiento.indSeTienePorCumplida){
                    if(this.valida(cumplimiento.ssctRegAcuerdoCumpSentenciaAmparoIndirectos)){
                      var acuerdoCumplimiento = cumplimiento.ssctRegAcuerdoCumpSentenciaAmparoIndirectos[0]
                      var acuerdoFirmeza = acuerdoCumplimiento.ssctAcuerdoFirmezaAmparoIndirectos
                      if(this.valida(acuerdoFirmeza)){
                        var acuFirmeza = acuerdoFirmeza[0]
                        data=[];
                        data.push([" ","  ","Existe acuerdo",acuFirmeza?.indAcuerdoFirmeza ? 'SI': 'NO']);
                        data.push([" ","  ","No. de acuerdo",acuFirmeza?.numAcuerdo]);
                        data.push([" ","  ","Fecha del acuerdo",this.datePipe.transform(acuFirmeza?.fecAcuerdo, 'dd/MM/yyyy')]);
                        data.push([" ","  ","Fecha de notificación",this.datePipe.transform(acuFirmeza?.fecNotificacion, 'dd/MM/yyyy')]);
                        data.push([" ","  ","Documentos",acuFirmeza?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
                        this.addRows(header,titulo,worksheet,data);
                      }
                    }
                  }
                }
              }
        }
      })
    }
  }

  fillSeccionCumpSentencia(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
      info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
        if(!sentencia?.isHistorico){
          if(this.valida(sentencia.ssctCumplimientoSentenciaAmparoIndirectos)){
            for (let index = 0; index < sentencia.ssctCumplimientoSentenciaAmparoIndirectos.length; index++) {
              const cumplimiento = sentencia.ssctCumplimientoSentenciaAmparoIndirectos[index];
              if(cumplimiento.indSeTienePorCumplida){
                data=[];
                data.push(["  ","  ","No. de acuerdo", cumplimiento?.numAcuerdo]);
                data.push(["  ","  ","Fecha de acuerdo", this.datePipe.transform(cumplimiento?.fecAcuerdo, 'dd/MM/yyyy')]);
                data.push(["  ","  ","Fecha de notificación", this.datePipe.transform(cumplimiento?.fecNotificacion, 'dd/MM/yyyy')]);
                data.push(["  ","  ","No. días para vencimiento", cumplimiento?.numDiasVencimiento]);
                data.push(["  ","  ","Fecha de vencimiento", this.datePipe.transform(cumplimiento?.fecVencimiento, 'dd/MM/yyyy')]);
                data.push(["  ","  ","No. de oficio", cumplimiento?.numOficio]);
                data.push(["  ","  ","Fecha del oficio",this.datePipe.transform(cumplimiento?.fecOficio, 'dd/MM/yyyy')]);
                data.push(["  ","  ","¿Se solicitó prorroga?", cumplimiento?.indSeSolicitaProrroga ? 'SI': 'NO']);
                data.push(["  ","  ","¿Se tiene por cumplido?", cumplimiento?.indSeTienePorCumplida ? 'SI': 'NO']);
                data.push(["  ","  ","Documentos", cumplimiento?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
                this.addRows(header,titulo,worksheet,data);
              }
            }
          }
        }
      })
    }
  }

  fillSeccionAcuerdoCumpSentencia(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
      info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
        if(!sentencia?.isHistorico){
          if(this.valida(sentencia.ssctCumplimientoSentenciaAmparoIndirectos)){
            for (let index = 0; index < sentencia.ssctCumplimientoSentenciaAmparoIndirectos.length; index++) {
              const cumplimiento = sentencia.ssctCumplimientoSentenciaAmparoIndirectos[index];
              if(cumplimiento.indSeTienePorCumplida){
                if(this.valida(cumplimiento.ssctRegAcuerdoCumpSentenciaAmparoIndirectos)){
                  var regAcuerdo = cumplimiento.ssctRegAcuerdoCumpSentenciaAmparoIndirectos[0]
                  data=[];
                  data.push(["  ","  ","No. de acuerdo", regAcuerdo?.numAcuerdo]);
                  data.push(["  ","  ","Fecha de acuerdo", this.datePipe.transform(regAcuerdo?.fecAcuerdo, 'dd/MM/yyyy')]);
                  data.push(["  ","  ","Fecha de notificación", this.datePipe.transform(regAcuerdo?.fecNotificacion, 'dd/MM/yyyy')]);
                  data.push(["  ","  ","Documentos", regAcuerdo?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
                  data.push(["  ","  ","¿Se promovió recurso de inconformidad?", regAcuerdo?.indPromovioInconformidad ? 'SI': 'NO']);
                  this.addRows(header,titulo,worksheet,data);
                }
              }
            }
          }
        }
      })
    }
  }

  fillSeccionAcuerdoNoCumpSentencia(data:any,header:any,worksheet:any,info:any,titulo:String){
    if(this.valida(info.ssctSentenciaAmparoIndirectos)){
      info?.ssctSentenciaAmparoIndirectos?.forEach(sentencia =>{
        if(!sentencia?.isHistorico){
          if(this.valida(sentencia.ssctCumplimientoSentenciaAmparoIndirectos)){
            for (let index = 0; index < sentencia.ssctCumplimientoSentenciaAmparoIndirectos.length; index++) {
              const cumplimiento = sentencia.ssctCumplimientoSentenciaAmparoIndirectos[index];
              if(!cumplimiento.indSeTienePorCumplida){
                data=[];
                data.push(["  ","  ","No. de acuerdo", cumplimiento.numAcuerdo]);
                data.push(["  ","  ","Fecha de acuerdo", this.datePipe.transform(cumplimiento?.fecAcuerdo, 'dd/MM/yyyy')]);
                data.push(["  ","  ","Fecha de notificación", this.datePipe.transform(cumplimiento?.fecNotificacion, 'dd/MM/yyyy')]);
                data.push(["  ","  ","No. días para vencimiento", cumplimiento?.numDiasVencimiento]);
                data.push(["  ","  ","Fecha de vencimiento",this.datePipe.transform(cumplimiento?.fecVencimiento, 'dd/MM/yyyy')]);
                data.push(["  ","  ","No. de oficio", cumplimiento?.numOficio]);
                data.push(["  ","  ","Fecha del oficio",this.datePipe.transform(cumplimiento?.fecOficio, 'dd/MM/yyyy')]);
                data.push(["  ","  ","¿Se solicitó prorroga?", cumplimiento?.indSeSolicitaProrroga ? 'SI': 'NO']);
                data.push(["  ","  ","¿Se tiene por cumplido?", cumplimiento?.indSeTienePorCumplida ? 'SI': 'NO']);
                data.push(["  ","  ","Documentos", cumplimiento?.ssctDocumentoDigitalizadoAmparoIndirecto?.refNombreArchivoFs]);
                this.addRows(header,titulo,worksheet,data);
              }
            }
          }
        }
      })
    }
  }

  valida(element){
    return element != undefined && element != null && element instanceof Array && element.length > 0
  }

  addEmptyRow(worksheet,count){
    for (let index = 0; index < count; index++) {
      worksheet.addRow([" "]);
    }
    this.row = this.row + count
  }

   // merge by start row, start column, end row, end column
   mergedCells(worksheet, startRow, startColumn, endRow, endColumn, value){
    worksheet.mergeCells(startRow,startColumn,endRow,endColumn);
    var row = worksheet.getRow(startRow)
    var cell = row.getCell(startColumn)
    cell.value = value;
    cell.alignment = { horizontal:'center'} ;
    return cell
  }

  borderCell(cells:any){
    cells.forEach(cell => {
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

  }
}
