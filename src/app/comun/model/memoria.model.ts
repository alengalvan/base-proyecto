import { AsuntoActor } from "./conciliacion.model";

export class headerMemoriaResponse{
    cveAsunto?:number;
    cveTipoAsunto?:number;
    expediente?:string;
    ooad?:string;
    desTribunalLaboral?:string;
    desCentroConciliacion?:string;
    desAccionReclamada?:string;
    desTrascendencia?:string;
    cveTrascendencia?:number;
    impEstimado?:string;
    fecPresentacion?:string;
    fecNotificacion?:string;
    fecAsignacion?:string;
    representante?:string;
    abogado?:string;
    conflictoIndividualSegSocial?:string;
    asuntoExpedienteAcumuladoList?:any[];
    cveCentroConciliacion?:number;
    cveTribunalLaboral?:number;
    refId?: number;
}

export class ContestacionResponse{
    cveAsunto?:number;
    cveDocumentoDigitalizadoCD?:number;
    fechaContDemandaPresentacion?:string;
    refContDemandaObservacion?:string;
}

export class ReplicaResponse{
    cveAsunto?:number;
    cveDocumentoDigitalizadoREP?:number;
    fechaReplicaNotificacion?:string;
    indReplica?:boolean;
    refReplicaObservacion?:string;
}

export class ContraReplicaResponse{
    cveAsunto?:number;
    cveDocumentoDigitalizadoCRE?:number;
    fechaContReplicaPresentacion?:string;
    indContReplica?:boolean;
    refContReplicaObservacion?:string;
}

export class AsuntoAudienciaConciliacion{
    comentarios?:string;
    cveAsunto?:number;
    desahogo?:string;
    expediente?:string;
    fechaAudiencia?:string;
    hora?:string;
    motivo?:string;
    cveAsuntoAudiencia?:number;
    cveDocumentoDigitalizado?:number;
    cveMotivoDiferimiento?:number;
    indPagoMulta?:boolean;

}

export class AudienciaPreliminarResponse{
    comentarios?:string;
    cveAsunto?:number;
    desahogo?:string;
    expediente?:string;
    fechaAudiencia?:string;
    hora?:string;
    motivo?:string;
    cveAsuntoDesahogoAud?:number;
    cveDocumentoDigitalizado?:number;
    cveMotivoDiferimiento?:number;
    cveUsuario?:number;
}

//////////////// ***** DGPP ***** ///////////////////
export class AudienciaJuicioResponse{
    cveAsuntoDesahogoJuicio?: number;
    cveAsunto?: number;
    desahogo?: string;
    refMotivoDiferimiento?: string;
    fechaAudiencia?: string;
    hora?: string;
    refObservacion?: string;
    cveDocumentoDigitalizado?: number;
}

export class AutoDepuracionResponse{
    cveAsunto?: number;
    indAutoDepuracion?: number;
    fecAutoDepuracion?: string;
    refAutoDepuracionObservacio?: string;
    cveDocumentoDigitalizadoAut?: number;
}

export class AlegatosResponse{
    cveAsunto?: number;
    indAlegato?: number;
    fecAlegatoPresentacion?: string;
    refAlegatoObservacion?: string;
    cveDocumentoDigitalizadoAlg?: number;
}

export class PruebasResponse{
    cveAsunto?: number;
    desTipoPrueba?: string;
    fecDesahogo?: string;
    cveDocumentoDigitalizado?: number;
    cveAsuntoDesahogoAud?: number;
}

export class SentenciasResponse{
    cveAsunto?: number;
    cveAsuntoSentencia?: number;
    fecSentencia?: string;
    fecSentenciaNotificacion?: string;
    indFirme?: number;
    firme?: string;
    fecFirme: string;
    actor: string;
    impSentencia: number;
    desSentidoSentencia: string;
    cveDocumentoDigitalizadoSen?: number;

    cveUsuario?: number;
    numSentencias?: number;
}

export class IncidentesResponse{
    cveAsunto?: number;
    desTipoIncidente?: string;
    cerrado?: string;
    fechaInterposicion?: string;
    procedio?: string;
    fechaDesahogo?: string;
    refViolacionProcesal?: string;
    refActoCorregido?: string;

    cveUsuario?: number;
    cveAsuntoIncidente?: number;
    cveAsuntoIncidenteAudiencia?: number;
    cveFlujoIncidente?: number;
    cveTipoIncidente?: number;

    cveSentidoIncidente?: number;
    impImporte?: number;
    indAllanamiento?: boolean;
    indResolucionIncidental?: boolean;
    refNombre?: string;
    refMaterno?: string;
    refPaterno?: string;
}

export class AmparosDirectosResponse{
    cveAsunto?: number;
    cveAsuntoAmparo?: number;
    cveAsuntoAmparoResolucion?: number;
    expediente?: string;
    fecSentencia?: string;
    desSentidoSentenciaEjecuto?: string;
    numeroAnio?: string;
    magistrado?: string;
    fecInterposicion?: string;
    fecAcuerdoInicial?: string;
    fecNotificacion?: string;
    fecResolucionIncidental?: string;
    fecAcuerdoInicialComplemento?: string;
    fecNotificacionComplemento?: string;
    nomTribunalColegiado?: string;
    tipoPromovente?: string;
    promovente?: string;
    regresaEtapa?: string;
    etapaRegresada?: string;
    desCausaImpugnacion?: string;
    nomJuzgado?: string;
    juez?: string;
    fecAcuerdoLaudoIncidental?: string;
    cveSentidoSentenciaAmparo?: number;
    sentidoAcuerdoInicial?: string;
    fecAudienciaConstitucional?: string;
    cveDocumentoDigitalizadoAmpResol?: number;
    cveDocumentoDigitalizadoAmpCompl?: number;
    cveDocumentoDigitalizadoRai?: number;
    cveDocumentoDigitalizadoNia?: number;
}

export class AmparosIndirectosResponse{
    cveAsunto?: number;
    cveAsuntoAmparo?: number;
    expediente?: string;
    fecSentencia?: string;
    desSentidoSentenciaEjecuto?: string;
    numeroAnio?: string;
    magistrado?: string;
    fecInterposicion?: string;
    fecAcuerdoInicial?: string;
    fecNotificacion?: string;
    fecResolucionIncidental?: string;
    fecAcuerdoInicialComplemento?: string;
    fecNotificacionComplemento?: string;
    nomTribunalColegiado?: string;
    tipoPromovente?: string;
    promovente?: string;
    regresaEtapa?: string;
    etapaRegresada?: string;
    desCausaImpugnacion?: string;
    nomJuzgado?: string;
    juez?: string;
    fecAcuerdoLaudoIncidental?: string;
    cveSentidoSentenciaAmparo?: number;
    sentidoAcuerdoInicial?: string;
    fecAudienciaConstitucional?: string;
    cveDocumentoDigitalizadoAmpResol?: number;
    cveDocumentoDigitalizadoAmpCompl?: number;
    cveDocumentoDigitalizadoRai?: number;
    cveDocumentoDigitalizadoNia?: number;
}

export class MultaResponse{
    cveAsunto?: number;
    cveAsuntoAudiencia?: number;
    impPagoMulta?: number;
    fecPagoMulta?: string;
    refPagoMultaObservacion?: string;
    cveDocumentoDigitalizadoMul?: number;
}

export class ConvenioResponse{
    cveAsunto?: number;
    cveAsuntoAudiencia?: number;
    actor?: string;
    fecConvenio?: string;
    fecRatificacion?: string;
    fecSancion?: string;
    fecCumplimiento?: string;
    impEstimado?: number;
    refComentario?: string;
    cveDocumentoDigitalizadoCon?: number;
}

//////////////// ***** DGPP ***** ///////////////////

/* KNOWXX */

export class ConvenioDemanda{
    actor?: string;
    expediente?: string
    fecConvenio?: string;
    fecRatificacion?: string;
    fecSancion?: string;
    fecCumplimiento?: string;
    importe?: number;
    comentario?: string;
    documento?: number;
    cveAsunto?: number;
    cveAsuntoActor?: number;
    cveUsuario?: number;
}

export class DesistimientoDemanda{
    actor?: string;
    fecDesistimiento?: string;
    fecRatificacion?: string;
    comentarios?: string;
    documento?: number;
    cveAsunto?: number;
    cveAsuntoActor?: number;
}

export class PagosDemanda{
    actor?: string;
    tipoPago?: string;
    fecSolicitud?: string;
    fecRecepcion?: string;
    fecExhibicion?: string;
    importeSolicitado?: number;
    importePagado?: number;
    comentarios?: string;
    documento?: number;
    cveAsunto?: number;
    cveAsuntoActorPago?: number;

    cveConceptoPago?: number;
    impCheque?: number;
    impSolicitado?: number;
    cveUsuario?: number;
}

export class ProvisionDemanda{
    actor?: string;
    tipoProvision?: string;
    importeSolicitado?: number;
    fecSolicitud?: string;
    documento?: number;
    cveAsunto?: number;

    cveAsuntoActorProvision?: number;
    cveConceptoPago?: number;
    impSolicitado?: number;
    cveUsuario?: number;
}

export class CumplimientosDemanda{
    cveAsunto?: number;
    actor?: string;
    fecOficio?: string;
    numOficio?: number;
    fecCumplimiento?: string;
    comentarios?: string;
    documento?: number;

    fecSolicitud?: string; //fecOficio
    fecRecepcion?: string;
    fecExhibicion?: string; //fecCumplimiento
    cveUsuario?: number;
    cveAsuntoActorCumadm?: number;

}

export class RecursosDemanda{
    cveAsunto?: number;
    tipoAmparo?: string;
    numAmparo?: string;
    tipoPromovente?: string;
    promovente?: string;
    tipoRecurso?: string;
    fecInterposicion?: string;
    numRecurso?: string;
    tribunal?: string;
    magistrado?: string;
    fecResolucion?: string;
    sentidoResolucion?: string;
    efectosConcesion?: string;
    regresarEtapa?: number;
    etapaRegresada?: string;
    documento?: number;

    cveAsuntoAmparo?: number;
    cveUsuario?: number;
}

export class OpinionDemanda{
    cveAsunto?: number;
    tipoAmparo?: string;
    causaImpugnacion?: string;
    fecOpinion?: string;
    opinion?: string;
    documento?: number;

    cveAsuntoAmparo?: number;
    cveUsuario?: number;
}

export class SinopsisDemanda{
    cveAsunto?: number;
    fecRegistro?: string;
    sipnopsis?: string;
    
    cveAsuntoSinopsis?: number;
    cveUsuario?: number;
}

/* KNOWXX */

/* DESCARGA PDF */

export class PDFMemoriaDemanda{
    header?: headerMemoriaResponse;
    asuntoAudienciaList?: any;
    asuntoActorList?: any;
    asuntoActorFinado?: any;
    asuntoAccionReclamadaSecundariaList?: any;
    asuntoCodemandadoList?: any;
    asuntoSolicitudInformeList?: any;
    asuntoConvenioList?: any;
    asuntoMultaList?: any;
    asuntoPagoList?: any;
    asuntoCumadmList?: any;
    asuntoProvisionList?: any;

    asuntoContestacionDemandaList?: any;
    asuntoReplicaList?: any;
    asuntoContrarreplicaList?: any;
    asuntoAudienciaPreliminarList?: any;
    asuntoAudienciaJuicioList?: any;
    asuntoAutoDepuracionList?: any;
    asuntoAlegatoList?: any;
    asuntoPruebaList?: any;
    asuntoSentenciaList?: any;
    asuntoIncidenteList?: any;
    asuntoAmparoDirectoList?: any;
    asuntoAmparoIndirectoList?: any;
    asuntoRecursoAmparoList?: any;
    
    asuntoOpinionList?: any;
    asuntoSinopsisList?: any;
    asuntoDesistimientoList?: any;
}

/* DESCARGA PDF */


/** UPDATE BY ANTONIO **/
export class updateTrascendenciaMTResponse{
	cveUsuario?: number;
	cveAsunto?: number;
	cveTrascendencia?: number;
}

export class updateMotivoAudienciaPreliminarMTResponse{
    cveAsunto?: number;
	id?: number;
	cveMotivoDiferimiento?: number;
	cveUsuario?: number;
}

export class updateAsuntoAudienciaPreliminarMTResponse{
    cveAsunto?: number;
	cveUsuario?: number;
	cveAsuntoDesahogoAud?: number;
	cveMotivoDiferimiento?: number;
}

export class updateActorMTResponse{
    refNombre?:string;
	refPaterno?:string;
	refMaterno?:string;
	refMatricula?:string;
	refNss?:string;
    refCurp?:string;
    refRfc?:string;
    numUmf?:number;
    refSdaDscSexo?:string;
    refSdaIdSexo?:string;

	cveAsunto?: number;
	cveUsuario?: number;
	cveAsuntoActor?: number;
}

export class deleteActorMTResponse{
    impEstimado?: number;
	cveUsuario?: number;
	actor: AsuntoActor;
}

export class deleteDestimientoMTResponse{
    cveAsunto?:number;
    cveAsuntoActor?: number;
    cveUsuario?: number;
}

export class deleteSolicitudInformacionMTResponse{
    cveAsunto?: number;
    cveAsuntoSolicitudInfo?: number;
    cveUsuario?: number;
}

export class deleteEtapaMT{
    cveAsunto?: number;
    cveUsuario?: number;
}

export class actualizarActorMTResponse{
    cveAsuntoActor?: number;
	cveAsunto?: number;
	cveUsuario?: number;
}

export class deleteAudienciaConciliacioResponse{
    cveAsunto?: number;
    cveAsuntoAudiencia?: number;
    cveUsuario?: number;
}

/** UPDATE BY ANTONIO**/
