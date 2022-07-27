import { Afiliado, Historial, Patron } from "./interfaces.model";
import {  DocumentoDigitalizado, ClaseActor, ColoniaCP, EstadoCP, MunicipioCp, AccionesReclamadasSecundarias, folioDerivacionModel } from 'src/app/comun/model/conciliacion.model';

export class RegistroInicialDemanda {
    
    asunto?:Asunto;
    asuntoActorList?: AsuntoActor[];
    documentoDigitalizado?: DocumentoDigitalizado;
    accionReclamList?:AccionesReclamadasSecundarias[];
    folioDerivacion?: folioDerivacionModel; 
    preRegistro?: boolean;

}

export class ReenvioDemanda {
    asunto?:Asunto;
    folioDerivacion?: folioDerivacionModel; 
}

export class Asunto{
    cveFolioDerivacion?:number;
    cveAsunto?:number;
    claseActor?: ClaseActor;
    cveTribunalLaboral?: number;
    numCissCveDocumentoPrueba?: number;
    refCissOtroDocumentoPrueba?: string;
    indTipoOrdinario?: any;
    indTipoEspecialSS?: any;
    indCiss?: number;
    refCissUltimoPatron?:string;
    refCissDirCp?: number;
    refCissDirCalle?:string;
    refCissDirNumExt?: number;
    refCissDirNumInt?:string;
    fecCissNacimiento?:string;
    indCissPericialMedica?: number;
    numFolio?: number;
    numAnio?: number;
    cveClaseActorAccionReclam?: number;
    fecPresentacion?:string;
    fecNotificacion?:string;
    impEstimado?: number;
    refCodemandado?:string;
    cveTrascendencia?: number;
    cveUsuarioAbogadoresponsable?: number;
    fecAsignacion?:string;
    stpAudienciaInicial?:string;
    cveUsuario?: number;
    cveRepresentante?:number;
    representante?: RepresentanteFetch;
    canSalarioBase?:any;
    fechaReplicaNotificacion?:string;
    fechaContDemandaPresentacion?:string;
    coloniaCp?:coloniaCpResponse;
    estado?:estadoResponse;
    municipioAlcaldia?:municipioAlcaldiaResponse;
    documentoPrueba?:documentoPruebaResponnse;
    refDerivacionMotivoReenvio?: string;
    fecDerivacionReenvio?: string;

    indReponeProcedimiento?: number;
    cveAsuntoIncompetencia?: number;
    indProcedeIncompetencia?: number;
}
export class documentoPruebaResponnse{
    id?: number;
    nomDocumentoPrueba?: string;
}

export class municipioAlcaldiaResponse{
    cveEstado?: number;
    id?: number;
    refNomMunicipioAlcaldia?: string;
}

export class coloniaCpResponse{
    cveMunicipioAlcaldia?: number;
    id?: number;
    refCp?: number;
    refNomColoniaCp?: string;
}

export class estadoResponse{
    id?: number;
    refNomEstado?: string;
}

export class RepresentanteFetch {

    coloniaCp?: ColoniaCP;
    cveColoniaCp?: number;
    estado?: EstadoCP;
    id?: number;
    municipioAlcaldia: MunicipioCp;
    refDespacho?:string;
    refDirCalle?:string;
    refDirNumExt?:string;
    refDirNumInt?:string;
    refEmail?:string;
    refMaternoRepresentante?:string;
    refNombreRepresentante?:string;
    refPaternoRepresentante?:string;
    refTelefono?:number;
}

export class AsuntoActor {
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
