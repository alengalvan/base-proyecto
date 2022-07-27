export class HomeDesistimiento{
    cveAsunto?: number;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    fecDesistimiento?: string;
    fecRatificacionDes?: string;
    causaDesistimiento?: string;
}

export class AsuntoDesistimiento {
    cveAsunto?: number;
    cveUsuario?: number;
    fecDesistimiento?: string;
    fecRatificacionDes?: string;
    fecSacion?: string;
    fecCumplimiento?: string;
    causaDesistimiento?: string;
    cveDocumentoDigitalizado?: number;
    asuntoActorList?: actoresDesistimiento[];
}

export class actoresDesistimiento {
    cveAsuntoActor: number;
    indDesistimiento: number;
}