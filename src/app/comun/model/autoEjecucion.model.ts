export class AsuntoAutoEjecucion{
    cveAsunto?:number;
}

export class AsuntoAutoEjecucionActores{
    cveAsuntoSentencia?:number;
}

export class AsuntoAutoEjecucionResponse{
    cveAsunto?:number;
    fecRequerimiento?:string;
    fecConvenio?:string;
    fecFirmeza?:string;
    cveDocumentoDigitalizado?:number;
    refObservacion?:string;
    cveUsuario?:number;
    cveAsuntoAutoEjecucion?:number;
    actoresDTO?: actoresDTOList[];
    indicador?:boolean;
}

export class insertOrUpdateAutoEjecucion{
    cveAsuntoAutoEjecucion?:number;
	cveAsunto?:number;
	fecRequerimiento?:string;
	fecConvenio?:string;
    fecFirmeza?:string;
	cveDocumentoDigitalizado?:number;
	refObservacion?:string;
    cveUsuario?:number;
	actoresDTO?: any[];

}

export class deleteAutoEjecucionRequest{
    cveAsuntoAutoEjecucion?:number;
	cveUsuario?:number;
}

export class ActoresSentenciaDesfavorableResponse{
    id?:number;
    cveAsuntoSentencia?:number;
    cveAsuntoActor?:number;
    cveAsuntoClaseActorAccionReclam?:number;
    cveSentidoSentencia?:number;
    impSentencia?:string;
    nombreActor?:string;
}

export class actoresDTOList{
    id?:number;
    cveAsunto?:number;
    cveAsuntoActor?:number;
    refNombre?:string;
    refPaterno?:string;
    refMaterno?:string;

}

export class actoresInsert{
    cveAsuntoActor?:number;
}