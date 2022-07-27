import { ColoniaCP, EstadoCP, MunicipioCp } from "./conciliacion.model";

export class Delegacion {
    cveDelegacion?: number;
    desDelegacion?: string;
    refAbreviacion?: string;
}

export class CentroConciliacion {

    cveCentroConciliacion?:number;
    desCentroConciliacion?:string;
    refIdAlcance?: number;
    desAlcance?: string;

}

export class Actor{

    cveClaseActor?: number; 
    desClaseActor?: string;

}

export class ActorGrupo{

    tipo?: string;
    actores?: Actor[];

}
export class ActorGroup{

    ASEGURADO?: ActorGroupElement[];
    TRABAJADOR?: ActorGroupElement[];
    Otro?: Actor[];

}

export class ActorGroupElement{

    id?: number;
    value?: string;

}

export class Sexo {
    
    cveSexo?: number;
    desSexo?: string;

}

export class Trascendencia {
    
    cveTrascendencia?: number;
    desTrascendencia?: string;

}


export class UMF {
    
    cveUmf?: number;
    desUmf?: string;

}

export class Reclamo{

    cveAccionReclamada?: number;
    cveClaseActorAccionReclam?: number;
    desAccionReclamada?: string;
    impEstimado?: string;
    numFactorCalculo?:number;
}

export class Abogado {

    cveDelegacion?: number;
    cvePerfil?: number;
    cveUsuario?: number;
    refEmail?: string;
    refMaterno?: string;
    refNombre?: string;
    refPaterno?: string;
    refUsuario?: string;
    refDelegacion?: string;
    refPerfil?: string;
    
}

export class TribunalJudicial{
    id?:number;
    nomTribunalLaboral: string;
    refIdAlcance?: number;
    desAlcance?: string;
}

export class Estado {
    id?: number;
    refNomEstado?:string;
}

export class Municipio {
    cveEstado?: number;
    id?: number;
    refNomMunicipioAlcaldia?:string;
}

export class Colonia {
    id?: number;
    cveMunicipioAlcaldia?: number; 
    refCp?:number; 
    refNomColoniaCp?: string;
}

export class Representante {
    coloniaCp?: ColoniaCP;
    cveColoniaCp?:number;
    cveDelegacion?:number;
    cveUsuario?:number;
    estado: EstadoCP;
    id?:number;
    municipioAlcaldia: MunicipioCp;
    refDespacho?:string;
    refDirCalle?:string;
    refDirNumExt?:string;
    refDirNumInt?:string;
    refEmail?:string;
    refMaternoRepresentante?:string;
    refNombreRepresentante?:string;
    refPaternoRepresentante?:string;
    refTelefono?:number;
    representanteDelegacion?:string;

}

export class DocumentoPrueba {
    id?: number; 
    nomDocumentoPrueba?: string;
}

export class reclamoModel {
    cveClaseActor?: number;
}

export class abogadoModel{
    cvePerfil?: number; 
    cveDelegacion?: number;
}

export class representanteDelegacion {
    cveDelegacion?:number;
}

export class coloniaMunicipio {
    cveMunicipioAlcaldia?:number;
}

export class municipioAlcaldia {
    cveEstado?:number;
}

export class Motivo{
    id?: number;
    refMotivoDiferimiento?: string;
    cveTipoAsunto?: number;
}
export class areaResponsableInformacion{
    id?: number;
    cveDelegacion?: number;
    desNomAreaResponsableInfo?: string;
}

export class pruebaModel{
    cveTipoPrueba?: number;
    desTipoPrueba?: string;
}

export class tipoIncidenteModel{
    cveTipoIncidente?: number;
    desTipoIncidente?: string;
}

export class promoventeModel{
    cvePromovente?: number;
    desPromovente?: string;
    indAmparo?:string;
}

export class impugnacionModel{
    cveImpugnacion?: number;
    desImpugnacion?: string;
    cveTipoAmparo?: number;
}

export class sentidoAmparoModel{
    cveSentidoAmparo?: number;
    desSentidoAmparo?: string; 
}

export class sentidoEjecutoModel{
    cveSentidoSentenciaEjecuto?: number;
    desSentidoSentenciaEjecuto?: string; 
}

export class tipoRecurso{
    id?: number;
    desTipoRecurso?: string;
}

export class codemandadoModel{
    cveAsunto?: number;
    indPersonaFisica?: number;
    indPersonaMoral?: number;
    refNombre?:string;
    refPaterno?:string;
    refMaterno?:string;
    cveAsuntoActor?: number;
    cveAsuntoCodemandado?: number;
}

export class conceptoPago{
    id: number;
    desConceptoPago: string;
}

export class bancosCatalogo{
    id: number;
    refNombre: string;
}

export class SentidoLiquidacion{
    cveSentidoIncidente?: number;
    desSentidoIncidente?: string;
}

export class Modulo{
    id?: number;
    cveModulo?: number;
    desModulo?: string;
    indEliminado?: boolean;
    cvePersonaModulo?: number;
    cvePersona?: number;
}

export class Perfil{
    cvePerfil?: number;
    desPerfil?: string;

    cveDelegacion?: number;
    indEliminado?: boolean;
}

export class Clasificacion{
    cveClasAccionReclamada?: number;
    desClasAccionReclamada?: string;
}

export class FlujoExcepcion{
    cveTipoFlujoExcepcion?:number;
    desTipoFlujoExcepcion?:string;
}

export class pesoLimite{
    pesoLimite?:number;
    pesoMaximo?:number;
}

export class alcanceCentroTribunal{
    id: number;
	refId: string;
	desAlcance: string;
}