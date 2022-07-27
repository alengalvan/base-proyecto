import { areaResponsableInformacion, Delegacion } from "./catalogo.model";
import { claseActor } from "./informacion.model";
import { Afiliado, Historial, Patron } from "./interfaces.model";

export class asuntoRequestFetch{
    asunto:{
        cveAsunto: number;
    };
}

export class insertActorConciliacion{
    asunto:{
        cveAsunto?: number;
        impEstimado?: number;    
    };
    asuntoActorList?:AsuntoActor[];
}

export class ConciliacionModel {
    cveCentroConciliacion?:number;
    numAnio?:number;
    numFolio?:number;
}

export class DemandaConciliacionModel{
    cveTribunalLaboral?:number;
    cveCentroConciliacion?:number;
    numAnio?:number;
    numFolio?:number;   
}

export class DemandaModel {
    cveTribunalLaboral?:number;
    numAnio?:number;
    numFolio?:number;
}

export class ConciliacionResponse {
    cveAsunto?: number;
    cveCentroConciliacion?: number;
    cveClaseActorAccionReclam?: number;
    cveModulo?: number;
    cveTrascendencia?: number;
    cveUsuario?: number;
    cveUsuarioAbogadoresponsable?: number;
    fecAsignacion?: Date;
    fecNotificacion?: Date;
    fecPresentacion?: Date;
    impEstimado?: number;
    numAnio?: number;
    numFolio?: number;
    stpAudienciaInicial?: Date;
    representante: Representante;
    documentoPrueba: DocumentoPrueba;
}

export class DemandaResponse{
    claseActor?: claseActor;
    coloniaCp?: ColoniaCP;
    cveAsunto?:number;
    cveClaseActorAccionReclam?:number;
    cveRepresentante?:number;
    cveTipoAsunto?:number;
    cveTipoAsuntoEtapaConfig?:number;
    cveTrascendencia?:number;
    cveTribunalLaboral?:number;
    cveUsuario?:number;
    cveUsuarioAbogadoresponsable?:number;
    desAccionReclam?:string;
    desTrascendencia?:string;
    desTribunalLaboral?:string;
    desUmf?:string;
    documentoPrueba?:number;
    estado: EstadoCP;
    fecAsignacion?:string;
    fecCissNacimiento?:string;
    fecNotificacion?:string;
    fecPresentacion?:string;
    impEstimado?:number;
    indCiss?:number;
    indCissPericialMedica?:number;
    municipioAlcaldia?: MunicipioCp;
    nomUsuarioAbogadoResponsable: null
    numAnio?:number;
    numCissCveDocumentoPrueba?:number;
    numFolio?:number;
    refCissDirCalle?:string;
    refCissDirCp?:number;
    refCissDirNumExt?:string;
    refCissDirNumInt?:string;
    refCissOtroDocumentoPrueba?:string;
    refCissUltimoPatron?:string;
    refCodemandado?:string;
    representante?:number;
    stpAudienciaInicial?:string;

    indTipoOrdinario?: boolean;
    indTipoEspecialSS?: boolean;
    fecAudienciaPreliminar?: string;
    fecAutoDepuracion?: string;
    fecAudienciaJuicio?: string;
}

export class RegistroInicialConciliacion {
    asunto?: Asunto;
    asuntoActorList?: AsuntoActor[];
    documentoDigitalizado?: DocumentoDigitalizado;
    folioDerivacion?: folioDerivacionModel; 
    preRegistro?: boolean;
}

export class ReenvioConciliacion {
    asunto?: Asunto;
    folioDerivacion?: folioDerivacionModel; 
}

export class Asunto {
    cveAsunto?:number;
    cveFolioDerivacion?:number;
    claseActor?: ClaseActor;
    cveCentroConciliacion?: number;
    fecAsignacion?: string;
    fecNotificacion?: string;
    fecPresentacion?: string;
    impEstimado?: number;
    numAnio?: number;
    numFolio?: number;
    stpAudienciaInicial?: string;
    refCodemandado?: string;
    fecAlta?:string;
    nomUsuarioAbogadoResponsable?:string;
    desCentroConciliacion?:string;
    canSalarioBase?:string;
    cveClaseActorAccionReclam?:number;
    cveRepresentante?:number;
    cveTipoAsunto?:number;
    cveTipoAsuntoEtapaConfig?:number;
    cveTrascendencia?:number;
    cveTribunalLaboral?:number;
    cveUsuario?:number;
    cveUsuarioAbogadoresponsable?:number;
    desAccionReclam?:string;
    desTrascendencia?:string;
    desTribunalLaboral?:string;
    desUmf?:string;
    fecCissNacimiento?:string;
    indCiss?:number;
    indCissPericialMedica?:number;
    indTipoEspecialSS?:number;
    indTipoOrdinario?:number;
    numCissCveDocumentoPrueba?:number;
    refCissDirCalle?:string;
    refCissDirCp?:number;
    refCissDirNumExt?:number;
    refCissDirNumInt?:string;
    refCissOtroDocumentoPrueba?:string;
    refCissUltimoPatron?:string;
    coloniaCp?:ColoniaCP;
    municipioAlcaldia?: MunicipioCp;
    estado?: EstadoCP;
    refDerivacionMotivoReenvio?: string;
    fecDerivacionReenvio?: string;
}

export class AccionesReclamadasSecundarias{
    cveAccionReclamada?:number;
    cveAsunto?:number;
    cveClaseActorAccionReclam?:number;
    cveUsuarioAlta?:string;
    cveUsuarioBaja?:string;
    cveUsuarioModifica?:string;
    desAccionReclamada?:string;
    fecAlta?:string;
    fecBaja?:string;
    fecModifica?:string;
    id?:number;
    impEstimado?:number;
    indAccionReclamPrincipal?:number;
    numFactorCalculo?:number;
}

export class DocumentoPrueba{
    id?:number;
    nomDocumentoPrueba?:string;
}

export class Representante {
    id?:number;
    refNombreRepresentante?:string;
}

export class ColoniaCP{
    id?:number;  
    cveMunicipioAlcaldia?:number;
    refCp?:number;
    refNomColoniaCp?:string;
}

export class MunicipioCp{
    id?:number;
    cveEstado?:number;
    refNomMunicipioAlcaldia?:string;
}

export class EstadoCP {
    id?:number;
    refNomEstado?: string;
}

export class ClaseActor{
    desClaseActor: string
    id: number;
}

export class AsuntoActor {
    id?:number;
    cveAsunto?:number;
    cveAsuntoActor?:number;
    indActorPrincipal?: number;
    indConsumoInterfases?: number;
    canSalarioBase?:number;
    indFinado?: number;
    numUmf?: number;
    desUmf?:string;
    refAfiliacion?: string;
    refCurp?: string;
    refMaterno?: string;
    refMatricula?: string;
    refNombre?: string;
    refNss?: string;
    refPaterno?: string;
    refRfc?: string;
    refSdaCveEntidadNacimiento?: string;
    refSdaCveTipoPension?: string;
    refSdaDscEntidadNacimiento?: string;
    refSdaDscNacimiento?: string;
    refSdaDscSexo?: string;
    refSdaIdSexo?: string;
    refSdaMesNacimiento?: string;
    refWseAntAnios?: string;
    refWseAntDias?: string;
    refWseAntQnas?: string;
    refWseClaveArea?: string;
    refWseClaveBaja?: string;
    refWseClaveDepto?: string;
    refWseClavePuesto?: string;
    refWseCuantiaBasica?: string;
    refWseDelegacion?: string;
    refWseDesArea?: string;
    refWseDesBaja?: string;
    refWseDesDelegacion?: string;
    refWseDesDepto?: string;
    refWseDesLocalidad?: string;
    refWseDesPuesto?: string;
    refWseDesTc?: string;
    refWseEstatus?: string;
    refWseFechaBaja?: string;
    refWseFechaIngreso?: string;
    refWseFechaJubPen?: string;
    refWseFechaModificacion?: string;
    refWseFmodorden?: string;
    refWseLocalidad?: string;
    refWsePorcentajePension?: string;
    refWseQuincenaMes?: string;
    refWseTc?: string;
    refWseTipoEmpleado?: string;
    refWseTipoJubilacion?: string;
    refWspCveDelegacion?: string;
    refWspCveSubDelegacion?: string;
    refWspDesDelegacion?: string;
    refWspDesSubDelegacion?: string;
    historiaLaboralList?: Historial[];
    patronesList?: Patron[];
    afiliado?: Afiliado;
}

export class DocumentoDigitalizado{
    cveDocumentoDigitalizado?: number;
    cveAsunto?: number;
    refHash?: string;
    refNombreArchivo?: string;
    refTipo?: string;
    id?: number;
}

export class AsuntoSolicitudInfoList{
    id?: number;
    numOficio?: string;
    fecOficioSolicitud?: string;
    fecSelloSolicitud?: string;
    fecSelloRecepcion?: string;
    cveAreaResponsableInfo?: number;
    documentoDigitalizado?: DocumentoDigitalizado;
    areaResponsableInfo?: areaResponsableInformacion;
    delegacion?: Delegacion;
    cveAccionReclamada?: number;
    desAccionReclamada?: string;
}

export class RegistroSolicitudInformacion{
    asunto?: Asunto;
    asuntoSolicitudInfoList?: AsuntoSolicitudInfoList[];    
}

export class ActoresConvenioInforList {
    cveAsuntoActor?: number;
    refNombre?: string;
    refApPaterno?: string;
    refApMaterno?: string;
    indConvenio?: number;
    refConvenioMotivoNoAcuerdo?: string;
}

export class RegistroConvenio {
    cveAsunto?: number;
    cveUsuario?: number;
    stpAudienciaInicial?: string; 
    fecConvenio?: string;
    fecConvenioRatificacion?: string;
    fecConvenioSancion?: string;
    fecConvenioCumplimiento?: string;
    asuntoActorList?: ActoresConvenioInforList[];
    refConvenioObservacion?: string;
    documentoDigitalizado?: DocumentoDigitalizado;
}

export class folioDerivacionModel {
    id?: number;
    numAnioDerivacion?: number;
    cveDelegacion?: number;
    numOficioDerivacion?: number;
}