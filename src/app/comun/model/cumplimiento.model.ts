export class infoCumplimiento{
    cveAsuntoActorCumadm: number;
    fecExhibicion: string;
    fecRecepcion: string;
    fecSolicitud: string;
}

export class AsuntoSolicitudCumplimiento{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActor: number;
    fecSolicitud: string;
    numOficio: number;
    cveDocumentoDigitalizadoSol: number;    
}

export class AsuntoRecepcionCumplimiento{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActorCumadm: number;
    fecRecepcion: string;
    cveDocumentoDigitalizadoRec: number;
}

export class AsuntoExhibicionCumplimiento{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActorCumadm: number;
    fecExhibicion: string;
    cveDocumentoDigitalizadoExi: number;
}