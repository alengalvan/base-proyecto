export class TrabajadorActivoSend {

    public delegacion?:string;
    public apellidoPaterno?:string;
    public apellidoMaterno?:string;
    public nombre?:string;
    public matricula?:string;
    public rfc?:string;
    public curp?:string;
    public nss?:string;
    public cveClaseActor?:string;
    public cveUsuario?:number;

}

export class ServiciosDigitales{
    public listaEmpleados?: Empleado[];
    public asegurado?: Asegurado;
    public historiaLaboralList?: Historial[];
    public patronesList?: Patron[];
    public afiliado?: Afiliado;
}

export class Empleado{
    public ANT_ANIOS?:string;
    public ANT_DIAS?:string;
    public ANT_QNAS?:string;
    public APELLIDO_MATERNO?:string;
    public APELLIDO_PATERNO?:string;
    public CLAVE_AREA?:string;
    public CLAVE_BAJA?:string;
    public CLAVE_DEPTO?:string;
    public CLAVE_PUESTO?:string;
    public CUANTIA_BASICA?:string;
    public CURP?:string;
    public DELEGACION?:string;
    public DES_AREA?:string;
    public DES_BAJA?:string;
    public DES_DELEGACION?:string;
    public DES_DEPTO?:string;
    public DES_LOCALIDAD?:string;
    public DES_PUESTO?:string;
    public DES_TC?:string;
    public FECHA_BAJA?:string;
    public FECHA_INGRESO?:string;
    public FECHA_JUB_PEN?:string;
    public FECHA_MODIFICACION?:string;
    public FMODORDEN?:string;
    public LOCALIDAD?:string;
    public MATRICULA?:string;
    public NOMBRE?:string;
    public NSS?:string;
    public PORCENTAJE_PENSION?:string;
    public QUINCENA_MES?:string;
    public RFC?:string;
    public STATUS?:string;
    public TC?:string;
    public TIPO_EMPLEADO?:string;
    public TIPO_JUBILACION?:string;
}

export class Asegurado{
    public curp?:string;
    public cveIdAsignacionNss?:number;
    public cveIdPersona?:number;
    public datosPersonaRenapo?:string;
    public estadoCivil?:string;
    public TC?:string;
    public fechaDefuncion?:string;
    public fechaNacimiento?:string;
    public lugarNacimiento?:LugarNacimiento;
    public nombre?:string;
    public nss?:string;
    public pais?:Pais;
    public primerApellido?:string;
    public rfc?:string;
    public segundoApellido?:string;
    public sexo?:Sexo;
    public tipoPension?:TipoPension;

    public agregadoAfiliacion?:string;
    public agregadoMedico?:string;
    public consultorio?:Sexo;

    public parentesco?:Parentesco;
    public subdelegacion?: SubDelegacion;
    public subEstadoDerechohabiente?:string;
    public turno?:Turno;
    public umf?:UMF;

    public nssCabezaGrupoFamiliar?: string;
}

export class TipoPension{
    cveIdTIpoPension?: number;
    desTipoPension?: string;
    refMMarcaPension?: string;
}

export class LugarNacimiento{
    public clave?:string;
    public claveRenapo?:number;
    public idRenapo?:number;
    public nombre?:string;
}

export class Parentesco{
    public descripcion?: string;
    public descripcionFemenina?: string;
    public descripcionMasculina?: string;
    public idParentesco?: number;
}

export class SubDelegacion{
    public checked?: string;
    public clave?: string;
    public delegacion?: string;
    public descripcion?: string;
    public errorFormGeneral?: string;
    public id?: number;
}

export class Delegacion{
    public checked?: string;
    public ciz?: number;
    public clave?: string;
    public descripcion?: string;
    public errorFormGeneral?: string;
    public id?: number;
    public cveDelegacion?: number;
}

export class AutoridadResp{
    public checked?: string;
    public ciz?: number;
    public clave?: string;
    public desNomAutoridad?: string;
    public errorFormGeneral?: string;
    public id?: number;

}

export class Turno{
    public descripcion?: string;
    public idTurno?: number;
}

export class UMF{
    public cvePresupuestalUMF?: string;
    public descUMF?: string;
    public numUMF?: number;
}
export class Pais{
    public descripcion?:string;
    public idPais?:number;
    public nacionalidad?:string;
}

export class Sexo{
    public descripcion?:string;
    public genero?:string;
    public idSexo?:number;
}

export class Historial{
    public claveCiz?:number;
    public claveDelegacionOrigen?:number;
    public claveModalidad?:string;
    public curp?:string;
    public eventual?:string;
    public extemporaneoConvenioSuspencion?:string;
    public fechaActualizacion?:string;
    public fechaCarga?:string;
    public fechaFinalMovimiento?:string;
    public fechaInicioMovimiento?:string;
    public fechaRecepcionMovimiento?:string;
    public huelga?:string;
    public jornadaSemanal?:string;
    public nss?:string;
    public numeroConsecutivoPeriodos?:number;
    public origenMovimientoFinal?:string;
    public origenMovimientoInicial?:string;
    public registroPatronal?:string;
    public salarioBase?:number;
    public subrogacionServicio?:string;
    public tipoMovimientoFinal?:number;
    public tipoMovimientoIniintcial?:number;
    public tipoSalario?:string;
}

export class Patron{
    public cveIdPatronSujetoObligado?: number;
    public cveModalidad?: string;
    public domicilio?: Domicilio;
    public nombreRazonSocial?: string;
    public regPatron?: string;
    public rfc?: string;
    public tipoPersona?: string;
}

export class Domicilio{
    public ambito?: number;
    public asentamiento?: string;
    public calle?: string;
    public checked?: string;
    public clave?: string;
    public codigoPostal?: string;
    public colonia?: string;
    public cveIdPersonafDom?: number;
    public descripcion?: string;
    public dicTipoDomicilio?: string;
    public domicilioCamino?: string;
    public domicilioCarretera?: string;
    public errorFormGeneral?: string;
    public estadoAdministracionAnteriorDomicilio?: string;
    public estadoAdministracionDomicilio?: number;
    public latitud?: string;
    public localidad?: string;
    public longitud?: string;
    public numExterior1?: number;
    public numExterior2?: string;
    public numExteriorAlf?: string;
    public numInterior?: number;
    public numInteriorAlf?: string;
    public tipoBusquedaVialidad?: string;
    public tipoDomicilio?: string;
    public vialidadPrimaria?: string;
    public vialidadReferenciaPosterior?: string;
    public vialidadReferenciaPrimaria?: string;
    public vialidadReferenciaSecundaria?: string;
}

export class Afiliado{
    public apellidoMaterno?: string;
    public apellidoPaterno?: string;
    public componentes?: string;
    public curp?: string;
    public cveDelegacion?: string;
    public cveSubdelegacion?: string;
    public desDelegacion?: string;
    public desSubdelegacion?: string;
    public gruposFamiliares?: GrupoFamiliar[];
    public idNss?: string;
    public pensiones?: Pension[];
    public rfc?: string;
}

export class GrupoFamiliar{
    public idGrupoFamiliar?: string;
    public numPagosEmitidos?: string;
}

export class Pension{
    public caracterPension?: string;
    public desCaracterPension?: string;
    public desFormaPagoPension?: string;
    public desIncidenciaPension?: string;
    public desRama?: string;
    public desTipoPension?: string;
    public diagnosticoSt3?: Diagnostico[];
    public diagnosticoSt4?: Diagnostico[];
    public fechaConservacionDerechos73?: string;
    public fechaConservacionDerechos97?: string;
    public fechaInicioPension?: string;
    public idAntecedente?: string;
    public idFormaPagoPension?: string;
    public idIncidencia?: string;
    public idRama?: string;
    public idRegimen?: string;
    public idTipoPension?: string;
    public importeAguinaldo?: number;
    public importeCuantiaPension?: number;
    public importeMensualPension?: number;
    public numFolioDictamen?: number;
    public numeroResolucion?: number;
    public salarioPromedio?: number;
    public semanasCotizadas?: number;
}

export class Diagnostico{
    public cveDiagnostico513?: string;
    public cveDiagnostico514?: string;
    public cveRiesgo?: string;
    public desDiagnostico513?: string;
    public desDiagnostico514?: string;
    public desRiesgo?: string;
    public idDiagnostico?: string;
    public observacion513?: string;
    public observacion514?: string;
    public porValuacion?: string;
}

export class Antecedentes{
    public investigacionLaboralList?: investigacionLaboral[];
    public juicioLaboralList?: juicioLaboral[];
    public inconformidadList?: inconformidad[];
    public juicioFiscalList?: juicioFiscal[];
    public responsabilidadPatrimonialList?: responsabilidadPatrimonial[];
}

export class investigacionLaboral{
    public idInvolucrado?: number;
    public numReporte?: string;
    public nombre?: string;
    public apellidoPaterno?: string;
    public apellidoMaterno?: string;
    public matricula?: string;
    public idDelegacion?: number;
    public numOficio?: number;
    public annio?: number;
    public desDelegacion?: string;
    public abreviacion?: string;
}

export class juicioLaboral{
    public numExpediente?: string;
    public idActor?: number;
    public anioExpediente?: number;
    public condicionBis?: number;
    public idJunta?: number;
    public idClaseActor?: number;
    public afiliacion?: string;
    public matricula?: number;
    public nombreActor?: string;
    public apellidoPaternoActor?: string;
    public apellidoMaternoActor?: string;
    public idLaudoIncidental?: number;
    public idResultadoLaudoIncidental?: number;
    public importeAllanamiento?: number;
    public curp?: string;
    public rfc?: string;
    public status?: number;
    public idEntidadFederativa?: number;
    public desJunta?: string;
    public abreviacion?: string;
    public ljlFase?: string;
    public ljlId?: number;
    public idDelegacion?: number;
    public delAbrev?: string;
}
export class inconformidad{
    public cveExpediente?: string;
    public claveIMSS?: string;
    public idEnmateriatidadFederativa?: string;
    public nombreInconforme?: string;
    public desDependencia?: string;
    public edoProcesal?: string;
}
export class juicioFiscal{
    public nombrePersona?: string;
    public cveImssPersona?: string;
    public expedienteJuicioFiscal?: string;
    public desSala?: string;
    public estadoProcesal?: string;
    public amaternoPersona?: string;
    public apaternoPersona?: string;
}
export class responsabilidadPatrimonial{
    public numExpediente?: string;
    public delAbrev?: string;
    public ljlFase?: string;
    public afiliacion?: string;
    public nombreActor?: string;
    public apellidoPaternoActor?: string;
    public apellidoMaternoActor?: string;
}