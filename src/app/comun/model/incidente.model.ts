import { NumberValueAccessor } from "@angular/forms";

export class HomeIncidenteModel{
    cveFlujoSiguiente?:number;
    cveTipoIncidente?:number;    
    existConcluidos?:boolean;
    fechaPresentacion?:string;
    fechaAudiencia?: string;
    id?:number;
    indProcede?:number;
    procedioIncidente?:string;
    siguienteActividad?:string;
    tipoIncidente?:string;

    fecDesahogo?: string;
    cveAsuntoIncidenteAudiencia?: number;
    refHoraDesahogo?: string;
}

export class IncidenciaModel{
    cveUsuario?: number;
    asuntoIncidente?:asuntoIncidenteModel;
    asuntoIncidenteAudiencia?:asuntoIncidenteAudienciaModel; 
}

export class asuntoIncidenteModel{
    id?: number;
    cveTipoIncidente?: number;
    cveAsunto?: number;
    cveFlujoIncidente?: number;
    fecResolucion?: string;
    fecNotificacion?: string;
    fecPresentacion?: string;
    cveDocumentoDigitalizadoRes?: number;
    refViolacionProcesal?: string;
    refActoCorregido?: string;

    refObservacion?: string;
    indAcumularSeparado?: number;
    cveEtapaFlujoRegresion?: number;

    cveTribunalLaboralInc?: number;
    numFolioInc?: number;
    numAnioInc?: number;
    cveDelegacionInc?: number;
    fecIncompetencia?: string;
    cveDocumentoDigitalizadoCon?: number;
    cveAsuntoAcumulacion?: number;
    indEnvioOtraOoad?: number;
}

export class asuntoIncidenteAudienciaModel{
    fecAudiencia?: string;
    cveDocumentoDigitalizado?: number;
    refObservacionDiferimiento?: string;
	cveAsuntoIncidente?: number;
	indAudienciaDiferida?:boolean;
	cveMotivoDiferimiento?: number;
	indProcedioIncidente?: number;

    fecDesahogo?: string;
    refHoraDesahogo?: string;

    indDesahogo?: number;
    cveAsuntoIncidenteAudien?: number;
    refObservacion?: string;
}

export class asuntoIncidenteResponse{
    id?: number;
    cveFlujoSiguiente?: number;
    tipoIncidente?: string;
    fechaPresentacion?: string;
    siguienteActividad?: string;
    procedioIncidente?: string;
    cveTipoIncidente?:number;
    indProcede?:number;
    existConcluidos?:boolean;
}

export class ConclusionIncidenteComunModel{
    indConcluidoPorIncidente?: number;
    cveUsuario?: number;
    asuntoIncidenteDTO?: asuntoIncidenteModel;
}

export class NuevoIncidenteLiquidacion{
    cveUsuario?: number;
    cveAsunto?: number;
    indPagoSubstancia?: number;
    cveDocumentoDigitalizadoCon?: number;
    refObservacion?: string;
    asuntoIncidenteAudienciaDTO?: asuntoIncidenteAudienciaModel;
}

export class HomeLiquidacion{
    cveAsunto?: number;
    cveTipoIncidente?: number;
}

export class DesahogoLiquidacion{
    cveUsuario?: number;
    cveAsunto?: number;
    id?: number;
    asuntoIncidenteAudienciaDTO?: asuntoIncidenteAudienciaModel;
}

export class AsuntoActorLiquidacion{
    cveAsunto?:number;
    cveAsuntoIncidente?: number;
    
	cveAsuntoActor?: number;
	refNombre?: string;
	refPaterno?: string;
	refMaterno?: string;

    /* DATOS DEL MODELO PARA REENVIAR */
    indResolucionIncidental?: number;
    indAllanamiento?: number;
    cveSentidoIncidente?: Number;
    impImporte?: number;
}

export class ActorSentido{
    cveUsuario?: number;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    indResolucionIncidental?: number;
    indAllanamiento?: number;
    cveSentido?: Number;
    importe?: number;
}

export class SentidoLiquidacion{
    cveUsuario?: number;
    cveAsunto?: number;
    cveAsuntoIncidente?: number;
    asuntoIncidenteActorList?: AsuntoActorLiquidacion[];
}

export class ResolucionLiquidacion{
    cveUsuario?: number;
    cveAsunto?: number;
    cveAsuntoIncidente?: number;
    asuntoIncidente?: ResolucionIncidenteLiquidacion;
    asuntoIncidenteActorList?: AsuntoActorLiquidacion[];
}

export class ResolucionIncidenteLiquidacion{

    fecResolucion?: string;
    fecNotificacion?: string;
    cveDocumentoDigitalizadoRes?: number;
    refObservacionRes?: string;

    fecAllanamiento?: string;
    fecNotificacionAlla?: string;
    cveDocumentoDigitalizadoAll?: number;
    refObservacionAlla?: string;

}