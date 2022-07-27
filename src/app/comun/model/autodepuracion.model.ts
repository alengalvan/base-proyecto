export class autoDepuracionModel{

    asunto?: asuntoModel;
    tipoPruebaList?:tipoPruebaListModel[];
    asuntoIncidenteList?:any[];
}

export class asuntoModel{
    cveAsunto?:number;
    indAutoDepuracion?:number;
    cveUsuario?:number;
    fecAutoDepuracion?:string;
    refAutoDepuracionObservacio?:string;
    cveDocumentoDigitalizadoAut?:number;
}

export class tipoPruebaListModel {
    cveTipoPrueba?:number;
    desTipoPrueba?:string;    
}


export class listActoresResponse{
    afiliado?: listAfinadoResponse;
    apellidoMaterno?:any;
    apellidoPaterno?:any;
    componentes?:any;
    curp?:any;
    cveDelegacion?:any;
    cveSubdelegacion?:any;
    desDelegacion?:any;
    desSubdelegacion?:any;
    gruposFamiliares?:any;
    id?:any;
    idNss?:any;
    nombre?:any;
    pensiones?:any;
    rfc?:any;
    canSalarioBase?:any;
    cveAsunto?:any;
    cveAsuntoActor?:any;
    delete?:any;
    desUmf?:any;
    historiaLaboralList?:any;
    indActorPrincipal?:any;
    indConsumoInterfases?:any;
    indConvenio?:any;
    indFinado?:any;
    numUmf?:any;
    patronesList?:any;
    refAfiliacion?:any;
    refConvenioMotivoNoAcuerdo?:any;
    refCurp?:any;
    refMaterno?:any;
    refMatricula?:any;
    refNombre?:any;
    refNss?:any;
    refPaterno?:any;
    refRfc?:any;
    refSdaCveEntidadNacimiento?:any;
    refSdaCveTipoPension?:any;
    refSdaDscEntidadNacimiento?:any;
    refSdaDscNacimiento?:any;
    refSdaDscSexo?:any;
    refSdaIdSexo?:any;
    refSdaMesNacimiento?:any;
    refWseAntAnios?:any;
    refWseAntDias?:any;
    refWseAntQnas?:any;
    refWseClaveArea?:any;
    refWseClaveBaja?:any;
    refWseClaveDepto?:any;
    refWseClavePuesto?:any;
    refWseCuantiaBasica?:any;
    refWseDelegacion?:any;
    refWseDesArea?:any;
    refWseDesBaja?:any;
    refWseDesDelegacion?:any;
    refWseDesDepto?:any;
    refWseDesLocalidad?:any;
    refWseDesPuesto?:any;
    refWseDesTc?:any;
    refWseEstatus?:any;
    refWseFechaBaja?:any;
    refWseFechaIngreso?:any;
    refWseFechaJubPen?:any;
    refWseFechaModificacion?:any;
    refWseFmodorden?:any;
    refWseLocalidad?:any;
    refWsePorcentajePension?:any;
    refWseQuincenaMes?:any;
    refWseTc?:any;
    refWseTipoEmpleado?:any;
    refWseTipoJubilacion?:any;
    refWspCveDelegacion?:any;
    refWspCveSubDelegacion?:any;
    refWspDesDelegacion?:any;
    refWspDesSubDelegacion?:any;
    ref_Importe?:number;
    status:number;
}

export class listAfinadoResponse{
    apellidoMaterno?:any;
    apellidoPaterno?:any;
    componentes?:any;
    curp?:any;
    cveDelegacion?:any;
    cveSubdelegacion?:any;
    desDelegacion?:any;
    desSubdelegacion?:any;
    gruposFamiliares?:any;
    id?:any;
    idNss?:any;
    nombre?:any;
    pensiones?:any;
    rfc?:any;
}