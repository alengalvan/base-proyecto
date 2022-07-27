export class Reporte{
    cveDelegacion?: number;
    cveClaseActor?: number;
    fechaInicial?: string;
    fechaFinal?: string;
    cveCentroConciliacion?: number;
    cveAccionReclamada?: number;
    cveTribunalLaboral?: number;
    cveTipoAsuntoEtapa?: number;
    cveAbogadoResponsable?: number;
    cveJuzgadoDistrito?: number;

    cveUsuario?: number;

    desCentroConciliacion?: string;
    nomTribunalLaboral?: string;
    expediente?: string;
    nombreActor?: string;
    afiliacion?: string;
    matricula?: string;
    curp?: string;
    rfc?: string;
    extinto?: string;
    accionReclamada?: string;
    pasivoContigente?: string;
    fechaNotificacion?: string;
    nombreAbogado?: string;
    importeEstimado?: number;
    estadoProcesal?: string;
    trascendencia?: string;
    representanteDelActor?: string;
    numActores?: number;
    fechaUltimaActualizacion?: string;

    fechaAudienciaConciliacion?: string;
	importePagadoTemporal?: number;
    importePagadoTemporalConcluido?: number;
	tipoConclusion?: string;
	motivosNoAcuerdo?: string;
	fechaConvenio?: string;
	fechaRatificacion?: string;
	fechaProximaAudiencia?: string;
	fechaConclusionTemporal?: string;
    cveClaseActorList:any[];

    cveUsuarioList:any[];

    fecAsignacion?: string;
    fecPresentacion?: string;
    cierreExpediente?: string;
    fecCierreExpediente?: string;
    fecRegistro?: string;

    desahogo?: string;
    motivo?: string;
}
