export class sentenciaModel{

    cveUsuario?:number;
    asuntoSentenciaDTO?:asuntoSentenciaDTOModel;
    sentenciaAccrecActorList?: sentenciaAccrecActorListModel[];
}

export class actualizarSentenciaModel{
    cveUsuario?: number;
    asuntoSentenciaDTO?: asuntoSentenciaActualizarDTOModel;
    sentenciaAccrecActorList?: sentenciaAccrecActorListModel[];
}

export class asuntoSentenciaDTOModel{
    cveAsunto?:number;
    fecSentencia?:string;
    fecSentenciaNotificacion?:string;
    cveDocumentoDigitalizado?:number;
    refSentenciaObservacion?:string;
    cveSentidoSentencia?:number;
}

export class asuntoSentenciaActualizarDTOModel{
    id?:number;
    cveAsunto?:number;
    fecSentencia?:string;
    fecSentenciaNotificacion?:string;
    cveDocumentoDigitalizado?:number;
    refSentenciaObservacion?:string;
    cveSentidoSentencia?:number;
}

export class sentenciaAccrecActorListModel{
    id?:number;
    cveAsuntoActor:number;
    cveAsuntoClaseActorAccionReclam:number;
    cveSentidoSentencia:number;
    impSentencia:string;
}
