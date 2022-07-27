export class HomeAmparo{
    
    id?:number;
    cveTipoAmparo?:number;
    desTipoAmparo?:string;
    numAnio?:number;
    numFolio?:string;
    cveTribunalColegiado?:number;
    desTribunalColegiado?:string;
    cveFlujoSiguiente?:number;
    cveFlujoActual?:number;
    siguienteActividad?:string;
    fechaInterposicion?:string;
    cvePromovente?:number;
    promovente?:string;
    indResuelto?:number;
    existFirme?:boolean;
    actores: any[];
    actoresNoDesistidos: any[];
    codemandados: any[];
    fechaSesion?: string;
    fechaNotificacion?: string;
    fechaResolucion?: string;
    fechaSentenciaAmparoIndirecto?: string;

    cveTipoRecurso?: number;
	desTipoRecurso?: string;
	cveAsuntoAmparoRecurso?: number;
	numAsuntoAmparoRecurso?: string;

    cveJuzgado?: number;
    desJuzgado?: number;
    fechaNotificacionAcuerdoLaudoInicial?:string;
}


export class insertAmparoModel{
    id?:number;
    cveAsunto?:number;
    cvePromovente?:number;
    cveCausaImpugnacion?:number;
    cveTipoAmparo?:number;
    cveFlujoAmparo?:number;
    indResuelto?:number;
    fecInterposicion?:string;
    fecAcuerdoInicial?:string;
    fecNotificacion?:string;
    cveAsuntoSentencia?:number;
    cveClaseActorAccionReclam?:number;
    indInterponeAmparo?:number;
    refOpinion?:string;
    fecOpinion?:string;
    fecResolucionIncidental?:string;
    fecNotificacionResolucion?:string;
    fechaInterposicion?:string;
    cveSentidoSentenciaAmparo?:Number;
    indSubsistencia?:Number;
    impLiquido?:Number;
    cveDocumentoDigitalizadoRai?:string;
    refObservacionRai?:string;
    actores: actoresModel[];
    cveUsuarioAlta?:string;
    refAccionReclamada?:string;
}

export class actoresModel{
    cveAsuntoActor?:number;   
}

export class SentidoAcuerdo {
    cveSentidoAcuerdo?: number;
    desSentidoAcuerdo?: string;
}

export class TribunalColegiado {
    cveTribunalColegiado?: number;
    nomTribunalColegiado?: string;
    cveDelegacion?: number;
    cveTribunalColegiadoDeleg?: number;
}

export class AmparoComplemento {
    cveUsuario?: number;
    cveAsuntoAmparo?: number;
    numAmparo?: number;
    numAnio?: number;
    cveTribunalColegiadoDeleg?: number;
    fecAcuerdoInicial?: string;
    fecNotificacion?: string;
    refNombreMagistrado?: string;
    refPaternoMagistrado?: string;
    refMaternoMagistrado?: string;
    cveSentidoAcuerdo?: number;
    cveDocumentoDigitalizado?: number;
}   

export class AsuntoAmparoSesion {
    cveUsuario?: number;
    cveAsuntoAmparo?: number;
    fecSesion?: string;
}

export class AsuntoAmparoResolucion {
    cveAsuntoAmparo?: number;
    fechaResolucion?: string;
    cveSentidoSentenciaEjecuto?: number;
    indRegresaEtapa?: boolean;
    cveEtapaConfiguracion?: number;
    cveDocumentoDigitalizado?: number;
    refEfectosConcesion?: string;
    cveUsuarioAlta?: number;
}

export class AsuntoAmparoSentenciaForm {
    cveUsuario?: number;
    cveAsunto?: number;
    asuntoAmparoResolucion?: AsuntoAmparoSentencia;
}

export class AsuntoAmparoSentencia {
    cveAsuntoAmparo?: number;
    fecAudienciaConstitucional?: string;
    fecSentencia?: string;
    cveSentidoSentenciaEjecuto?: number;
    indRegresaEtapa?: boolean;
    cveEtapaConfiguracion?: number;
    cveDocumentoDigitalizado?: number;
    refEfectosConcesion?: string;
}


export class SentidoAmparo {
    cveSentidoAmparo?: number;
    desSentidoAmparo?: string;
}


export class codemandadoModel{
    cveAsuntoActor?:number;
    cveAsuntoAmparo?:number;
    cveAsuntoCodemandado?:number;
    id?:number;
    refNombre?:string;
}

export class administracionRecursosModel{
    numAmparo?: number;
    recurso?: HomeAmparo[];
}

export class AsuntoRecursoAmparo{
    cveUsuario?: number;
    cveAsunto?: number;
    cveAsuntoAmparo?: number;
    cvePromovente?: number;
    cveTipoRecurso?: number;
    actores?: actoresModel[];
    numAmparo?: number;
    numAnio?: number;
    cveTribunalColegiadoDeleg?: number;
    cveJuzgadoDelegacion?: number;
    refNombreMagistrado?: string;
    refPaternoMagistrado?: string;
    refMaternoMagistrado?: string;
    fecInterposicion?:string;
    cveDocumentoDigitalizado?: number;

}

export class juzgadoModel{
    cveJuzgadoDelegacion?:number;
    cveJuzgado?:number;
    nomJuzgado?:string;

    cveDelegacion?:number;
}

export class AsuntoRecursoResolucion {
    cveAsuntoAmparo?: number;
    cveAsuntoAmparoRecurso?: number;
    fechaResolucion?: string;
    cveSentidoSentenciaEjecuto?: number;
    indRegresaEtapa?: boolean;
    cveFlujoAmparo?: number;
    cveDocumentoDigitalizado?: number;
    refEfectosConcesion?: string;
    cveUsuario?: number;
}

export class actoresDesistimientoModel{
    cveAsuntoActor?:number;
    cveAsuntoCodemandado?:number;
    indDesistimiento: boolean;
}

export class AsuntoDesistimiento{
    cveUsuario?: number;
    cveAsuntoAmparo?: number;
    cvePromovente?: number;
    actores?: actoresDesistimientoModel[];
    fecDesistimiento?: string;
    cveDocumentoDigitalizado?: number;

}