export class Digitalizacion {
  id?: number;
  refNombreArchivo?: string;
  refTipo?: string;
  cveAsunto?: string;
  refHash?: string;
}

export class Documento {
  file?: string;
  fileName?: string;
  fileSize?: string;
}

export class excepcionDocumento {
  id?: number;
  cveTipoFlujoExcepcion?: number;
  cveJuzgado?: number;
  numFolio?: number;
  numAnio?: number;
  cveAsunto?: number;
  refUsuario?: String;
  cveUsuario?: number;
  cveTipoAsunto?: number;
}

export class excepcionCheck {
  cveTipoFlujoExcepcion?: number;
  cveJuzgado?: number;
  numFolio?: number;
  numAnio?: number;
  cveTipoAsunto?: number;
  cveAsunto?: number;
}

export class homeExcepcion {
  cveDelegacion?: number;
  cveTipoAsunto?: number;
  tipoReporte?: number;
  cveJuzgado?: number;
  cveTipoAsuntoEtapa?: number;
  idExpediente?: string;
  refUsuario?: String;
  cveUsuario?: number;
  cveTipoFlujoExcepcion?: number;
  cveFlujoProcesal?:number;
}

export class excepcionResponse {
  cveAsunto?: number;
  cveDocumentoDigitalizado?: number;
  cveEstadoProcesalSiguiente?: number;
  desCentroConciliacion?: string;
  desDelegacion?: string;
  desTribunalLaboral?: string;
  fecSolicitud?: string;
  idExpediente?: string;
  indAceptado?: string;
  indAtendido?: string;
  indRechazado?: string;
  nomEstadoProcesalSiguiente?: string;
  refComentarioRechazo?: string;
  cveTribunalLaboral?: number;
  cveCentroConciliacion?: number;
}

export class solicitudExcepcion {
  id?: number;
  refUsuario?: String;
  refComentarioRechazo?: string;
  cveUsuario?: number;
}
