
export class expediente {
    id: number;
    numeroExpediente: string;
    estadoProcesalPrincipal: string;
    ultimaActualizacionPrincipal: string;
    estadoProcesalIncidental: string;
    ultimaActualizacionIncidental: string;
    terceroInteresado: string;
    estadoProcesal: string;
    opcionesDisponibles: Array<opcionesDisponibles>
}

export class opcionesDisponibles {
    id: number;
    nombre: string;
    router: string;
}

export class memoriaTecnica {
    // notificacionAmaparoIndirecto: notificacionAmparoIndirecto;
    acuerdos: acuerdosModel
}

export class notificacionAmparoIndirecto {
    amparoContra: string;
}

export class acuerdosModel{
    noOficio: string;
    fechaAcuerdo: string;
    terceroInteresado: string;
    autoridadResponsable: string;
    cuaderno: string;
    fechaAudiencia: string;
}

export class suspencionPlano{
    autoridadResponsable: string;
    fechaVencimiento: string;
    noOficio: string;
    paraEfectosDe: string;
    fechaOficio: string;
    documentos: string;
    idDocumento: string
}

export class CuadernoPrincipalInformeJustificado{
    fechaVencimiento: string;
    juzgadoDistrito: string;
    autoridadResponsable: string;
    informe: string;
    idDocumento: string;
}

export class requerimiento{
    tipoRequerimiento: string;
    tipoRequerimientoDes: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    fechaVencimiento: string;
    desahogoRequerimiento: string;
    noOficioDesahogo: string;
    fechaOficio: string;
    documento: string;
    idDocumento: string;
}

export class cuadernoIncidental{
    fechaVencimiento: string;
    juzgadoDistrito: string;
    autoridadResponsable: string;
    informe: string;
    idDocumento: string;
}
export class requerimientosIncidente{
    hayRequerimientos: String;
    noOficio: String;
    fechaAcuerdo: String;
    fechaNotificacion: String;
    observaciones: String;
}

export class tiposQuejosos{
    tipoQuejoso: string
    tipo: string
    matricula: string
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    nombreRepresentante: string
}

export class quejosoMoral{
    tipoQuejoso: string;
    registroPatronal: string;
    nombreQuejoso: string;
}

export class quejosoOtro{
    tipoQuejoso: string;
    nombreRepresentante: string;
    nombreQuejoso: string;
}

export class sentencia{
    fechaSentencia: string;
    fechaNotificacion: string;
    existeIncompetencia: string;
    direccionGeneral: string;
    sentidoSentencia: string;
    direcGeneral: string;
    direcUnidadMedica: string;
    efectos: string;
    sentencia: string;
    fecVencimiento: string;
    idDocumento: number;
}

export class cumplimientoSentencia{
    noAcuerdo: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    diasVencimiento: string;
    fechaVencimiento: string;
    noOficio: string;
    fechaOficio: string;
    solicitoProrroga: string;
    seTieneCumplida: string;
    nombreDocumento: string;
    idDocumento: number;
}

export class acuerdoCumplimientoSentencia{
    noAcuerdo: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    nombreDocumento: string;
    idDocumento: number;
    promovioRecursoInconformidad: string;
}

export class notificacionRecursoInconformidad{
    noAcuerdo: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    tribunalColegiado: string;
    toca: string;
    nombreDocumento: string;
    idDocumento: number;
}

export class resolucionRecursoInconformidad{
    noAcuerdo: string;
    fechaResolucion: string;
    fechaNotificacion: string;
    sentidoResolucion: string;
    nombreDocumento: string;
    idDocumento: number;
}

export class suspensionDefinitiva{
    fecAudIncidental: string;
    fecDiferimientoAud: string;
    fecSentencia: string;
    fechaNotificacion: string;
    desSentidoSuspDefAmparoIndirecto: string;
    nombreDocumento: string;
    idDocumento: number;
    desParaEfectosDe: string;
}

export class recursoSuspensionDefinitivaIMSS{
    promovioIMSS: string;
    fechaVencimiento: string;
    fechaPresentacion: string;
    noAcuerdoAdmision: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    sentidoAdmision: string;
    tribunalColegiado: string;
    toca: string;
    nombreDocumento: string;
    idDocumento: number;
}
export class recursoSuspensionDefinitivaQuejoso{
    promovioQuejoso: string;
    noAcuerdoAdmision: string;
    fechaAcuerdo: string;
    fechaNotificacion: string;
    sentidoAdmision: string;
    tribunalColegiado: string;
    toca: string;
    nombreDocumento: string;
    idDocumento: number;
}

export class resolucionRecursoSuspDefIMSS{
    tribunalColegiado: string;
    toca: string;
    fechaResolucion: string;
    fechaNotificacion: string;
    sentidoResolucion: string;
    nombreDocumento: string;
    idDocumento: number;
}

export class resolucionRecursoSuspDefQuejoso{
    tribunalColegiado: string;
    toca: string;
    fechaResolucion: string;
    fechaNotificacion: string;
    sentidoResolucion: string;
    nombreDocumento: string;
    idDocumento: number;
}
