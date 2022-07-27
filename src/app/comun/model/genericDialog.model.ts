export interface GenericDialogModel {
    title: string;
    subtitle: string;
    message: string;
    cancelMessage: string;
    confirmMessage: string;
    messageIcon?:boolean | false;
}

export interface GenericReasignacionModel{
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

export interface GenericIncidenteDialogModel {
    title:string;
    titleProcendete: string;
    titleNoProcedente: string;
    subtitleProcendete: any[];
    subtitleNoProcedente: any[];
    message: string;
    cancelMessage: string;
    confirmMessage: string;
}

export interface GenericAsignacionDialogModel {
    abogadoAsignado: string;
    usuario: string;
    perfil: string;
    ooad: string;
    materia:string;
    totalElement:number;
}