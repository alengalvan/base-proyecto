export class contestacionDemandaModel{

    asunto: asuntoSeguimientoContestacion;
    documentoDigitalizado: documentoSeguimiento;
}

export class replicaDemandaModel {
    asunto: asuntoSeguimientoReplica;
    documentoDigitalizado: documentoSeguimiento;
}

export class contraReplicaDemandaModel {
    asunto: asuntoSeguimientoContraReplica;
    documentoDigitalizado: documentoSeguimiento;
}


export class asuntoSeguimientoContestacion{

    cveAsunto?:number;
    fechaContDemandaPresentacion?:string;
    refContDemandaObservacion?:string;
    cveUsuario?:number;
}

export class asuntoSeguimientoReplica{

    cveAsunto?:number;
    fechaReplicaNotificacion?:string;
    refReplicaObservacion?:string;
    cveUsuario?:number;
    indReplica?:boolean;
}

export class asuntoSeguimientoContraReplica{
    cveAsunto?:number;
    fechaContReplicaPresentacion?:string;
    refContReplicaObservacion?:string;
    cveUsuario?:number;
    indContReplica?:boolean;
}

export class documentoSeguimiento{
    cveDocumentoDigitalizado?:number;
}

export class documentoResponse{
    cveAsunto?:any;
    cveDocDigAmparoIndirecto?:number;
    refHash?:string;
    refNombreArchivo?:string;
    refTipo?:string;
    cveUsuarioAlta?: number;
}

export class AsuntoAudienciaJuicio {
    cveAsunto?: number;
    cveUsuario?: number;
    fecAudienciaJuicio?: string;
    refAudienciaJuicioObservacion?: string;
    cveDocumentoDigitalizadoJui?:number;
}

export class RegistroAudienciaJuicio {
    asunto?: AsuntoAudienciaJuicio;
}

export class AsuntoAlegatos {
    cveAsunto?: number;
    cveUsuario?: number;
    indAlegato?: number;
    fecAlegatoPresentacion?: string;
    refAlegatoObservacion?: string;
    cveDocumentoDigitalizadoAlg?: number;
}

export class RegistroAlegatos {
    asunto?: AsuntoAlegatos;
}

