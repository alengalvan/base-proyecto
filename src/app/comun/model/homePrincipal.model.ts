export class TipoAsunto {
	cveTipoAsunto:number;
	desTipoAsunto:string;
}

export class cveTipo{
	cveTipoAsunto:number;
}

export class AsuntoConfig{
	cveTipoAsunto:number;
	cveTipoAsuntoEtapaConfig:number;
	desTipoAsuntoEtapaConfig:string;
	indDigitalizacionObligatoria:number;
	indNotificacionAbogado:number;
	indNotificacionActiva:number;
	indNotificacionCordinador:number;
	indNotificacionJefeDepto:number;
	indNotificacionJefeServJur:number;
	numDiasVigencia:number;
	numTareaDestino:number;
	numTareaOrigen:number;
  desTipoFlujoExcepcion:string;
  id:number;
}

export class ReporteHome {

	public constructor(init?: Partial<ReporteHome>) {
        Object.assign(this, init);
    }

    public cveDelegacion?:number;
	public cveCentroConciliacion?:number;
	public cveTribunalLaboral?:number;
	public idExpediente?:string;
	public cveEstadoProcesalSiguiente?:any;
    public nomEstadoProcesalSiguiente?:string;
	public nombreActor?:string;

	public desDelegacion?:string;
	public desCentroConciliacion?:string;
	public nomTribunalLaboral?:string;
	public cveEstadoProcesal?:number;
	public nomEstadoProcesal?:string;
	public numActores?:number;
	public fechaUltimaActualizacion?:Date;

	public nomUsuarioAbogadoResponsable: string;
	public desAccionReclam: string;
	public matricula: string;
	public afiliacion: string;
	public cveAsunto: number;
	public cveUsuario: number;
	public indReplica: boolean;

	public indConvenio: number;
	public indDesistimiento: number;
	public status:boolean = false;
	public indSentenciaFirme: number;

	public cveTipoAsunto?: number;
	public refId?: number;

}
