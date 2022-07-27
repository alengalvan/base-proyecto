export class Actualizacion{
    
    cveTipoAsunto?: number;
    cveDelegacion?: number;		
    numOficioDerivacion?: number;
    numAnioDerivacion?: number;
    indDerivacionRechazado?: number;
    indDerivacionAceptado?: number;

    cveAsunto?: number;
    cveCentroConciliacion?: number;
    fecAsignacion?: string;
    fecAlta?: string;
    
    numAnio?: number;
    numFolio?: number;
    cveTipoAsuntoEtapaConfig?: number;
    desTipoAsuntoEtapaConfig?: string;
    desCentroConciliacion?: string;
    cveTribunalLaboral?: number;
    nomTribunalLaboral?: string;
    cveFolioDerivacion?: number;
    desDelegacion?: string;
    
    indImpresionOficio?: number;
    indFecRecepcion?: number;
    refComentario?: string;
    fecRecepcion?: string;

    cveFolioDerivacionEstado?: number;
    desFolioDerivacionEstado?: string;

    cveUsuario?: number;
    id: number;

    cveAsuntoActor?: number;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    cveAccionReclamada?: number;
    desAccionReclamada?: string;

    cveDelegacionRechazado?: number;
    desDelegacionRechazado?: string;
    
}

export class FechaRecepcion{
    id?: number;
    cveAsunto?: number;
    cveUsuario?: number;
    fecRecepcion?: string;
    fecDerivacionRecepcion?: string;
}