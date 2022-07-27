export class infoFicha{
    actor: string;
    cveAsuntoActorFicha: number;
    fecSolicitud: string;
    fecRecepcion: string;
    fecExhibicion: string;
    refUnidadInformacion: string;
    refUnidadNegocio: string;
    refCentroCostos: string;
    refCuenta: string;
    impImporte: number;
    cveDocumentoDigitalizado: number;
    refObservacion: string;
    cveDocumentoDigitalizadoRec: number;
    cuentaContable: string;
}

export class AsuntoSolicitudFicha{
    cveAsunto: number;
    cveUsuario: number;
    cveAsuntoActor: number;
    fecSolicitud: string;
    impImporte: number;
    cveDocumentoDigitalizado: number;
    refUnidadInformacion: string;
    refUnidadNegocio: string;
    refCentroCostos: string;
    refCuenta: string;
}

export class AsuntoRecepcionFicha{
    cveUsuario: number;
    cveAsuntoActorFicha: number;
    fecRecepcion: string;
    refObservacion: string;
    cveDocumentoDigitalizadoRec: number;
}
