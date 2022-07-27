export class infoProvisiones{
    cveAsunto: number;
    actor: string;
    cveAsuntoActor: number;
    cveAsuntoActorProvision: number;
    fecSolicitud: string;
    cveConceptoPago: number;
    desConceptoPago: string;
    impSolicitado: string;
    cveDocumentoDigitalizadoSol: number;
    refNombreArchivo: string;
}

export class AsuntoSolicitudProvision{  
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActor: number;
    cveAsuntoActorProvision?: number;
    fecSolicitud: string;
    cveConceptoPago: number;
    impSolicitado: number;
    cveDocumentoDigitalizadoSol: number;    
    delete?: number;
}