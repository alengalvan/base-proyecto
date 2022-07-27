export class infoPlanilla{
    cveAsuntoActorPlanilla: number;
    fecSolicitud: string;
    fecRecepcion: string;
    fecExhibicion: string;
}

export class AsuntoSolicitudPlanilla{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActor: number;
    fecSolicitud: string;
    indAbono: number;
    indCargo: number;
    indPago: number;
    indProvision: number;
    impImporte: number;
    cveDocumentoDigitalizado: number;
    refFolio: string;
    refUnidadInformacion: string;
    refUnidadNegocio: string;
    refCentroCostos: string;
    refCuenta: string;
}

export class AsuntoRecepcionPlanilla{
    cveUsuario: number;
    cveAsuntoActorPlanilla: number;
    fecRecepcion: string;
    refObservacion: string;
    cveDocumentoDigitalizadoRec: number;
}