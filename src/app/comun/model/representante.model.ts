import { ColoniaCP, EstadoCP, MunicipioCp } from "./conciliacion.model";

export class insertRepresentante {

    cveUsuario?:number;//logueo
    cveDelegacion?:number;
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

    newCveDelegacion?: number;
}

export class actualizarRepresentante{
    cveAsunto?:number;
	cveRepresentante?:number;
	cveUsuario?:number;
}