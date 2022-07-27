export class deshagoAudienciaModel{
    cveAsunto?:number;
	indDiferimiento?:boolean;
	fechaAudiencia?:string;
    cveMotivoDiferimiento?:number;
    cveDocumentoDigitalizado?:number;
    cveUsuarioAlta?:number;
    cveUsuario?:number;
    refObservacion?:string;
    listPruebasAdmitidas?: listPruebasAdmitidasModel[];
    asuntoIncidenteList?:any[];
}

export class listPruebasAdmitidasModel{
    cveTipoPrueba?:number;
    cveDesahogoPrueba?:number;
    fechaDesahogo?:string;
}