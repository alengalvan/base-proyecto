export class asignacionExpedienteRequestModel{
    cveUsuario?: number;
	expedientes?: any;
}

export class expedienteRequestModel{
	numAnioDerivacion?: number;
	numOficioDerivacion?: number;
	cveDelegacion?: number;
}

export class expedienteResponseModel{
    id?: number;
    numAnioDerivacion?: number;
    cveDelegacion?: number;
    numOficioDerivacion?: number;
    indImpresionOficio?: number;
    refComentario?: string;
    fecRecepcion?: string;
    status?: number;
    message?: string;
}

export class expedienteRechazarReenviar{
    cveAsunto?: number;
	refMotivo?: string;
	numAnioDerivacion?: number;
	cveDelegacion?: number;
	numOficioDerivacion?: number;
    fechaEnvio?:string;
    cveUsuario?:number;

    fecRecepcion?:string;
}



