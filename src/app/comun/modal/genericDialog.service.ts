import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Abogado } from '../model/catalogo.model';
import { HomeIncidenteModel } from '../model/incidente.model';

@Injectable({ providedIn: 'root' })
export class GenericDialogService {

    private dialogConfig = new MatDialogConfig();

    seguimientoExpedienteSiguienteEstado(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, avanzar",
        }
        return this.dialogConfig;
    }

    seguimientoExpedienteFinalizar(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Finalizar seguimiento de la conciliación",
            subtitle: "Se concluirá el expediente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, finalizar",
        }
        return this.dialogConfig;
    }

    seguimientoExpedienteEliminarRegistro(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar registro",
            subtitle: "En caso de continuar no se podrá recuperar la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig
    }

    seguimientoExpedienteSalirActualizacionActores(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Salir de actualización de actores",
            subtitle: "Se perderán todos los cambios",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Salir",
        }
        return this.dialogConfig
    }

    seguimientoExpedienteSalirNuevoRegistro(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Abandonar registro",
            subtitle: "En caso de aceptar se perderá toda la información.",
            message : "¿Deseas continuar con la cancelación?",
            cancelMessage: "Cancelar",
            confirmMessage: "Aceptar",
        }
        return this.dialogConfig
    }

    seguimientoSolicitudesPendiente(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "Algunos de los registros han quedado incompletos \nen caso de continuar no podrá volver a esta fase para \n realizar actualizaciones.",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, avanzar",
        }
        return this.dialogConfig
    }

    seguimientSentenciaFinalizar(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Finalizar seguimiento de la sentencia",
            subtitle: "Al guardar la información, el expediente será concentrado",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, finalizar",
        }
        return this.dialogConfig;
    }

    seguimientoAmparo(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Concluir seguimiento de amparo",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    registroAmparo(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Concluir registro de amparo",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    seguimientoRecurso(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Concluir seguimiento de recurso",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    registroIncidentes(incidente:HomeIncidenteModel[],homeIncidente:HomeIncidenteModel[]):MatDialogConfig{
        this.dialogConfig.data = {
            title: "Se marcó 1 incidente como procedente",
            titleProcendete: 'Procedente',
            titleNoProcedente: 'No procedente',
            subtitleProcendete: incidente,
            subtitleNoProcedente: homeIncidente,
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    registroIncidentesCancel():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Ningún incidente se marcó como procedente",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    concentrarJuicioIncidente(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "¿Está seguro de concentrar el juicio?",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    concentrarDemandaConvenio(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "El expediente quedará en espera",
            subtitle: "Debido a falta de Pago o Cumplimiento Administrativo",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    continuarProcesoDemandaConvenio(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "La demanda continuará su proceso",
            subtitle: "Con los actores que no firmaron el Convenio. \n Los actores con Convenio quedan a la espera del Pago y/o Cumplimiento \nAdministrativo",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    concentrarDemandaDesistimiento(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "El expediente será concentrado",
            subtitle: "",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    continuarProcesoDemanda(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "La demanda continuará con el proceso",
            subtitle: "El expediente no sufrirá cambios en su etapa procesal",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    sentenciaDemandaConvenio(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "El expediente no será concentrado",
            subtitle: "Debido a falta de Pago o Cumplimiento Administrativo",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    reasignacionDescartar(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Descartar expedientes",
            subtitle: "Los expedientes no serán reasignados",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Avanzar",
        }
        return this.dialogConfig;
    }

    reasignacion(abogadoResponse:Abogado,total:number):MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            abogadoAsignado: abogadoResponse.refNombre + ' '+abogadoResponse.refPaterno+ ' '+abogadoResponse.refMaterno,
            usuario: abogadoResponse.refUsuario,
            perfil: abogadoResponse.refPerfil,
            ooad: abogadoResponse.refDelegacion,
            materia: 'JUICIO LABORAL',
            totalElement: total,
        }
        return this.dialogConfig;
    }

    eliminarCodemando(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar codemandado",
            subtitle: "Se eliminará del expediente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Avanzar",
        }
        return this.dialogConfig;
    }

    eliminarSinopsis(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar sinopsis",
            subtitle: "Se eliminará del expediente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Avanzar",
        }
        return this.dialogConfig;
    }

    cierreLote(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Cierre de lote",
            subtitle: "En caso de continuar se cerrará el lote y el \n número de oficio no se podrá volver a asignar",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    expedienteReenviarRechazar(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    expedienteCapturista():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    nuevoIncidenteLiquidacion():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, avanzar",
        }
        return this.dialogConfig;
    }

    fechaFirmezaAutoEjecucion():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Avanzar al siguiente estado",
            subtitle: "En caso de continuar no podrá recuperar la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    eliminarAutoEjecucion():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar auto de ejecución",
            subtitle: "En caso de continuar no podrá recuperar la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    eliminarUsuario():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar usuario",
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }

    eliminarRepresentante():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar representante",
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }

    eliminarRequerimieto():MatDialogConfig{
      this.dialogConfig.restoreFocus = false;
      this.dialogConfig.autoFocus = false;
      this.dialogConfig.data = {
          title: "Eliminar tipo de requerimiento",
          subtitle: "Se eliminará el registro de manera permanente",
          message : "¿Deseas continuar?",
          cancelMessage: "Cancelar",
          confirmMessage: "Si, eliminar",
      }
      return this.dialogConfig;
  }

    eliminarAccion():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar acción reclamada",
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }

    eliminarCatalogo(catalogo: string):MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar " + catalogo,
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }


    eliminarExpediente():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar expediente",
            subtitle: "Al continuar el archivo será borrado permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    aceptarExcepcion():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Aceptar excepción",
            subtitle: "El proceso será inválido en caso de no aprobarse",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    ValidacionArchivo():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Validación de archivo",
            subtitle: "El archivo se validará debido al peso, esto podrá tomar entre 2 a 4 hr.",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    eliminarSolicitud():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar solicitud",
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    excepcionesRechazo(motivo:string):MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Solicitud eliminada",
            message : motivo,
            cancelMessage: "Cerrar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    descargarExpediente():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Descargar expediente",
            subtitle: "Se realizará la descarga del archivo",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, continuar",
        }
        return this.dialogConfig;
    }

    eliminarActor(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar actor",
            subtitle: "Se actualizará la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    editarActor(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Actulización de actor",
            subtitle: "Se actualizará la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    agregarActor(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Agregar actor",
            subtitle: "Se actualizará la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    principalActor(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Actulización de actor",
            subtitle: "Se actualizará la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    eliminarEtapaMT(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar solicitud",
            subtitle: "La etapa será borrada y las siguientes a está tambien",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    salirEdiccionActoresMT(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Abandonar edicción de actores",
            subtitle: "En caso de continuar se perderá toda la información",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    eliminarSolicitudEtapaMT(ultimaEtapa): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: `Eliminar fase de ${ultimaEtapa}`,
            subtitle: "Todos los datos serán borrados de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
            messageIcon: true,
        }
        return this.dialogConfig;
    }

    eliminarEtapaCumplimientoPagosMT(etapa): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: `Eliminar ${etapa}`,
            subtitle: "La etapa será borrada y las siguientes a esta también.",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }

    eliminarRecursoActoresMT(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: `Eliminar recurso.`,
            subtitle: "El recurso cuenta con más de un actor/codemandado promovente.",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }

    datosIncorrectosInterfaz(ingresado: string, interfaz:string): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Datos ingresados",
            subtitle: "El nombre ingresado: " + ingresado + "\r\n no coincide con el que devuelve la interfaz: \r\n" + interfaz,
            message : "¿Deseas agregar los datos de interfaz?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    datosNoEncontradosInterfaz(finado: boolean): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: finado ? "Finado no encontrado" : "Actor no encontrado",
            subtitle: "Los datos ingresados no fueron encontrados en la interfaz",
            message : finado ? "¿Desea agregar el finado al juicio?" : "¿Desea agregar el actor al juicio?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }

    eliminarAutoridad():MatDialogConfig{
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Eliminar autoridad responsable",
            subtitle: "Se eliminará el registro de manera permanente",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, eliminar",
        }
        return this.dialogConfig;
    }


}
