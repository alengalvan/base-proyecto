export class infoPagos{
    cveAsuntoActorPago: number;
    fecExhibicion: string;
    fecRecepcion: string;
    fecSolicitud: string;
    impSolicitado: string;
    indManual: number;
}

export class AsuntoSolicitudPago{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActor: number;
    fecSolicitud: string;
    numOficio: number;
    cveConceptoPago: number;
    impSolicitado: number;
    indPrei: number;
    indManual: number;
    cveDocumentoDigitalizadoSol: number;    
}

export class AsuntoRecepcionPago{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActorPago: number;
    fecRecepcion: string;
    impCheque: number;
    impSolicitadoRecepcion: number;
    numCheque: number;
    cveBanco: number;
    cveDocumentoDigitalizadoRec: number;
}

export class AsuntoExhibixionPago{  
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActorPago: number;
    fecExhibicion: string;
    cveDocumentoDigitalizadoExi: number;
}