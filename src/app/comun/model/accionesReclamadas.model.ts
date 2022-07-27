export class accioneReclamadasModel{

    asunto?:asuntoModel;
    documentoDigitalizado?:digitalizadoModel;
 
}

export class asuntoModel{
    cveAsunto?:number;
    fechaContDemandaPresentacion?:string;
    cveDocumentoDigitalizadoCD?:number;
    refContDemandaObservacion?:string;
    cveTipoAsuntoEtapaConfig?:string;
}

export class digitalizadoModel{
    cveDocumentoDigitalizado?:number;
}
