export class insertAmparoIndirectoModel{

    cveTipoAmparo?:number;
    cveAsunto?:number;
    cveUsuarioAlta?:number;
    cvePromovente?:number;
    cveCausaImpugnacion?:number;
    refAccionReclamada?:string;  
  
    fecAcuerdoLaudoIncidental?:string;
    fecNotifAcuerdoLaudoIncidental?:string;

    fecInterposicion?:string;    
    fecAcuerdoInicial?:string;
    fecNotificacion?:string;
        
    fecOpinion?:string;
    refOpinion?:string;
  
    indInterponeAmparo?:number;
    cveAsuntoSentencia?:number;
    actores?: any;
    complemento? :complementoModel;
    
}

export class complementoModel{

    numAmparo:number;
	numAnio:number; 
	cveJuzgadoDelegacion:number;
	refNombreJuez:string;
	refPaternoJuez:string;
	refMaternoJuez:string;

    cveSentidoAcuerdo: number;
    cveDocumentoDigitalizado: number;

}


export class insertAmparoIndirectoComplemento{
    
    cveUsuario?: number;
    cveAsuntoAmparo?: number;
    numAmparo?: number;
    numAnio?:number;   
	cveJuzgadoDelegacion?:number;
    refJuezNombre?: string;
    refJuezPaterno?: string;
    refJuezMaterno?: string;
    fecAcuerdoInicial?: string;
    fecNotificacion?: string;
    cveSentidoAcuerdo?: number;
    cveDocumentoDigitalizado?: number;
    
}