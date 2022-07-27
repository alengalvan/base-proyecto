export class HomeConvenio{
    cveAsunto?: number;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    fecConvenio?: string;
    fecRatificacion?: string;
    fecSancion?: string;
    fecCumplimiento?: string;
    causaConvenio?: string;
}

export class AsuntoConvenio{
    cveAsunto?: number;
    cveUsuario?: number;
    fecConvenio?: string;
    fecRatificacion?: string;
    fecSacion?: string;
    fecCumplimiento?: string;
    causaConvenio?: string;
    cveDocumentoDigitalizado?: number;
    asuntoActorList?: actoresConvenio[];
}

export class actoresConvenio {
    cveAsuntoActor: number;
    indConvenio: number;
}