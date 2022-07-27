import { areaResponsableInformacion, Delegacion } from "./catalogo.model";
import { Asunto, DocumentoDigitalizado } from "./conciliacion.model";
import { folioDerivacionResponse } from "./informacion.model";
import { RegistroInicialDemanda } from "./registroDemanda.model";

export class ClaseDemanada {

    public demandaTribunalLaboral?:number;
    public demandaNumJuicio?:string;
    public demandaAnnio?:number;

    public demandaClaseActor?:string;
    public demandaActorNombre?:string;
    public demandaActorApePaterno?:string;
    public demandaActorApeMaterno?:string;
    public demandaActorMatricula?:string;
    public demandaActorAfiliacion?:string;
    public demandaActorCurp?:string;
    public demandaActorRFC?:string;
    public demandaSalarioBase?:string;
    public demdandaActorGenero?:string;
    public demdandaActorGeneroDesc?:string;
    public demandaActorUMF?:string;
    public demandaActorUMFDesc?:string;

    public demandaObligatorios?:string;
    public demandaPatron?:string;
    public demandaEstado?:string;
    public demandaMunicipio?:string;
    public demandaCalle?:string;
    public demandaColonia?:string;
    public demandaNumExterior?:string;
    public demandaNumInterior?:string;
    public demandaCP?:string;
    public demandaIdCP?:any;
    public demandaNacimiento?:string;
    public demanadaDocumento?:string;
    public demandaDocumentoTipo?:string;
    public demandaPericial?:string;

    public demanadaFinadoNombre?:string;      
    public demandaFinadoApePaterno?:string;
    public demandaFinadoApeMaterno?:string;
    public demandaFinadoAfiliacion?:string;
    public demandaFinadoMatricula?:string;
    public demandaFinadoCURP?:string;
    public demandaFinadoRFC?:string;
    public demandaFinadoUMF?:string;
    public demandaFinadoUMFDesc?:string;
    public demandaFinadoGenero?:string;
    public demandaFinadoGeneroDesc?:string;

    public representanteNombre?:string;

    public demandaReclamadoActo?:string;
    public cveClaseActorAccionReclam?: number;
    public demandaReclamadoPresentacion?:string;
    public demandaReclamadoNotificacion?:string;
    public demandaReclamoEstimado?:string;
    public demandaReclamoCodemandado?:string;
    public demandaReclamoTipo?:string;

    public demandaAbogadoResponsableNombre?:string;
    public demandaAbogadoResponsable?:string;
    public demandaAbogadoAsignacion?:string;
    public demandaJuicio?:any

    public folioDerivacion?:folioDerivacionResponse;
    public numAnioDerivacion?: number;
    public cveDelegacion?: number;
    public numOficioDerivacion?: number;

    public mensajeDerivacion?:number;
    public mensajeAbogado?:number;
    public mensajeDemanda?:number;
    public mensajeFinado?:number;
    public mensajeReclamo?:number;
    public mensajeActor?:number;
    public mensajeJuicio?:number;
    public mensajeRepresentante?:number;
    public agregarActorInterface?:number;
    public agregarFinadoInterface?:number;
    public documento?:DocumentoDigitalizado

    /* INCOMPETENCIA */
    indReponeProcedimiento?: number;
    cveAsuntoIncompetencia?: number;
    indProcedeIncompetencia?: number;

    expedienteIncompetencia?: RegistroInicialDemanda;

}

export class AsuntoSolicitudInfo{
    id?: number;
    numOficio?: string;
    fecSelloSolicitud?: string;
    fecOficioSolicitud?: string;
    fecSelloRecepcion?: string;
    cveAreaResponsableInfo?: number;
    solicitudAtendida?: boolean;
    documentoDigitalizado?: DocumentoDigitalizado;
    documentoDigitalizadoRec?: DocumentoDigitalizado;
    areaResponsableInfo?: areaResponsableInformacion;
    delegacion?: Delegacion;  
    cveAsunto?: number;
    cveDocumentoDigitalizado?: number;
    cveDocumentoDigitalizadoRec?:number;
    cveUsuario?:number;
}

export class RegistroSolicitudInfo{
    asunto?: Asunto;
    asuntoSolicitudInfo?: AsuntoSolicitudInfo;   
    cveUsuario?: number; 
}

export class RegistroSolicitudInfoList{
    asunto?: Asunto;
    asuntoSolicitudInfoList?: AsuntoSolicitudInfo[];    
}

export class AsuntoAudienciaFechas{
    fechaContDemandaPresentacion?: string;
    fechaReplicaNotificacion?: string;
    fechaContReplicaPresentacion?: string;
    cveAsunto?: number;
}

export class AsuntoDesahogoPrueba{
    cveDesAhogoAud?: number;
    cveTipoPrueba?: number;
    fechaDesahogo?: string;
    nombrePruebaAdmitida?: string;
    cveDesahogoPrueba?: number; 
}

export class AsuntoSetenciaJuicio{
    id?: number;
    cveAsunto?: number;
    fecSentencia?: string;
    fecSentenciaNotificacion?: string;
    cveDocumentoDigitalizado?: string;
    refSentenciaObservacion?: string;
    cveSentidoSentencia?: number;
    indFirme?: number;
    fecFirme?: string;
    indSentenciaAmparo?:boolean;
    cveUsuario?: number;
}

export class DetalleSentencia{
    asuntoSentencia?: AsuntoSetenciaJuicio;
    documentoDigitalizado?: DocumentoDigitalizado;
    seguimientoSentenciaAccRecActorList?: SeguimientoSentenciaAccRecActor[];
}

export class SeguimientoSentenciaAccRecActor{
    cveSentidoSentenciaAccion?: number;
    cveSentidoSentenciaCabecera?: number;
    cveDocumentoDigitalizado?: number;
    cveSentenciaAccRecActor?: number;
    sentenciaObservaciones?: string;
    desAccionReclamada?: string;
    refNombreArchivo?: string;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    impSentencia?: string;
}

export class AsuntoSetenciaFirme{
    cveUsuario?: number;
    asuntoSentenciaDTO?: AsuntoSetenciaJuicio;
}

export class AsuntoDesahogoAudienciaPruebas{
    cveAsunto?: number;
	indDiferimiento?: boolean;
	fechaAudiencia?: string;
    cveMotivoDiferimiento?: number;
    cveDocumentoDigitalizado?: number;
    cveUsuarioAlta?: number;
    refObservacion?: string;
    listPruebasAdmitidas?: AsuntoDesahogoPrueba[];
}

export class EtapasProcesalesResolucion{
    numTareaOrigen?: number;
    desTipoAsuntoEtapaConfig?: string;
}
 

export class AccionesReclamas{
    cveAccionReclamada?: number;
    cveAsunto?: number;
    cveClaseActorAccionReclam?: number;
    cveUsuarioAlta?: number;
    cveUsuarioBaja?: number;
    cveUsuarioModifica?: number;
    desAccionReclamada?: string;
    fecAlta?: string;
    fecBaja?: string;
    fecModifica?: string;
    id?: number;
    impEstimado: 0
    indAccionReclamPrincipal?: number;
    numFactorCalculo?: string;
}