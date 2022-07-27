import { Modulo, Perfil } from "./catalogo.model";
import { ColoniaCP, EstadoCP, MunicipioCp } from "./conciliacion.model";

export class GestionUsuario{

    id: number;
    cveUsuario?: number;
    cveCargo?: number;
    cveDelegacion?: number;
    cvePerfil?: number;
    refCurp?: string;
    refEmail?: string;
    refNombre?: string;
    refPaterno?: string;
    refMaterno?: string;
    refMatricula?: string;
    refTelefono?: string;
    cveUsuarioOperacion?: number;
    desDelegacion?: string;
    usuarioPersonaModuloDTOList?: Modulo[];
    usuarioPersonaPerfilDTOList?: Perfil[];

    nombreUsuario?: string;
    refUsuario?: string;
    desModulo?: string;

    indActivo?: boolean;
    cveDelegacionActiva?: number;
    cvePersona?: number;

}

export class GestionRepresentante{

    desDespacho?: string;

    cveUsuario?:number;//logueo
    cveDelegacion?:number;
    newCveDelegacion?: number;
    cveColoniaCp?:number;
    refDespacho?:string;
    refDirCalle?:string;
    refDirNumExt?:number;
    refDirNumInt?:string;
    refEmail?:string;
    refNombreRepresentante?:string;
    refPaternoRepresentante?:string;
    refMaternoRepresentante?:string;
    refTelefono?:number;

    coloniaCp?: ColoniaCP;
    estado?: EstadoCP;
    id?:number;
    municipioAlcaldia?: MunicipioCp;
    representanteDelegacion?:number;

    cveRepresentante?: number;
    cveRepresentanteDelegacion?: number;
    delegacion?: string;

    desRepresentante?: string;
    desDelegacion?: string;
    cveMunicipioAlcaldia?: any;
    representante: any;




}

export class CheckRepresentante{
    refNombreRepresentante?:string;
    refPaternoRepresentante?:string;
    refMaternoRepresentante?:string;
    cveDelegacion?:number;
    cveUsuario?:number;
}

export class GestionConciliacion{
    id?: number;
    desCentroConciliacion?: string;
    cveUsuario?: number;
    movimiento?: string;
    cveCentroConciliacion?: number;
    cveAlcance?: number;
    desAlcance?: string;
}

export class GestionTribunal{
    id?: number;
    nomTribunalLaboral?: string;
    cveUsuario?: number;
    movimiento?: string;
    cveTribunalLaboral?: number;
    cveAlcance?: number;
    desAlcance?: string;

    cveTribunalColegiado?: number;
    nomTribunalColegiado?: string;
    cveDelegacion?: number;
    cveTribunalColegiadoDeleg?: number;
    tribunalColegiadoDelegDTO?: TribunalColegiadoDelegDTO;
}

export class TribunalColegiadoDelegDTO{
    id?: number;
    cveDelegacion?: number;
}

export class GestionJuzgado{
    id?: number;
    nomJuzgado?: string;
    cveUsuario?: number;
    movimiento?: string;
    juzgadoDelegacionDTO?: JuzgadoDelegacionDTO;
}

export class JuzgadoDelegacionDTO{
    id?: number;
    cveDelegacion?: number;
    cveJuzgado?: number;
}

export class GestionAcciones{
    id?: number;
    cveUsuario?: number;
    movimiento?: string;
    cveClaseActor?: number;
    desClaseActor?: string;
    cveAccionReclamada?: number;
    desAccionReclamada?: string;
    cveClaseActorAccionReclam?: number;
    accionReclamadaDTO?: AccionReclamadaDTO;
    claseActorAccionReclamDTO?: ClaseActorAccionReclamDTO;
}

export class AccionReclamadaDTO{
    id?: number;
    cveAccionReclamada?: number;
    desAccionReclamada?: string;
    impEstimado?: number;
    cveClasAccionReclamada?: number;
    numFactorCalculo?: number;
}

export class ClaseActorAccionReclamDTO{
    id?: number;
    cveClaseActorAccionReclam?: number;
    cveClaseActor?: number;
    cveAccionReclamada?: number;
}

export class deleteExpediente{
    cveUsuario?:number;
	cveAsunto?:number;
    cveDelegacionBaja?:number;
	fecBajaSolicitud?:string;
	refBajaSolicitante?:string;
	refBajaMotivo?:string;
	refBajaComentario?:string;
}

export class HomeExpedienteDTO{
    status: boolean;
	cveEstadoProcesalSiguiente: number;
	cveDelegacion: number;
	idExpediente:string;
	cveUsuario:number;
	nombreActor:string;
    cveDelegacionBaja?:number;
}

export class HomeGestionExpediente{

    cveAsunto?:number;
    indReplica?:string;
    matricula?:string;
    afiliacion?:string;
    desAccionReclam?:string;
    nomUsuarioAbogadoResponsable?:string;
    cveDelegacion?:number;
    desDelegacion?:string;
    idExpediente?:string;
    cveCentroConciliacion?:number;
    desCentroConciliacion?:string;
    cveTribunalLaboral?:number;
    nomTribunalLaboral?:string;
    nombreActor?:string;
    cveEstadoProcesal?:number;
    nomEstadoProcesal?:string;
    cveEstadoProcesalSiguiente?:number;
    nomEstadoProcesalSiguiente?:string;
    numActores?:number;
    fechaUltimaActualizacion?:string;
    indDesistimiento?:string;
    indConvenio?:string;
    indSentenciaFirme?:string;
    fecBajaSolicitud?:string;
    refBajaSolicitante?:string;
    refBajaMotivo?:string;
    refBajaComentario?:string;
    cveDelegacionBaja?:number;
    fecEjecucion?:string;
	usuarioEjecucion?:string;

}
