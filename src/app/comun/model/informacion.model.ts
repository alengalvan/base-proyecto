import { DocumentoDigitalizado } from "./conciliacion.model";

export class ClaseConciliacion{

    public ConcilacionFederal?:string;
    public ConcilacionNumJuicio?:string;
    public ConcilacionYYYY?:string;

    public ActorTipo?:string;
    public ActorAfiliacion?:string;
    public ActorMatricula?:string;
    public ActorRFC?:string;
    public ActorCurp?:string;
    public ActorNombre?:string;
    public ActorApePaterno?:string;
    public ActorApeMaterno?:string;
    public ActorSalarioBase?:string;
    public ActorUMF?:string;
    public ActorUmfDesc?:string;
    public ActorGenero?:string;
    public ActorGeneroDesc?:string;

    public AfinadoAfiliacion?:string;
    public AfinadoMatricula?:string;
    public AfinadoCURP?:string;
    public AfinadoRFC?:string;
    public AfinadoNombre?:string;
    public AfinadoApePaterno?:string;
    public AfinadoApeMaterno?:string;
    public AfinadoGenero?:string;
    public AfinadoGeneroDesc?:string;

    public IdAbogadoResponsable?:number;
    public AbogadoResponsable?:string;
    public AbogadoFecAsignacion?:string;
    public AbogadoFecNotificacion?:string;
    public AbogadoHora?:string;

    public ReclamadoActo?:string;
    public cveClaseActorAccionReclam?: number;
    public ReclamadoFecPresentacion?:string;
    public ReclamadoFecNotificacion?:string;
    public ReclamoEstimado?:string;
    public ReclamoCodemandado?:string;
    public ReclamoTipo?:string; 

    public folioDerivacion?:folioDerivacionResponse;
    public numAnioDerivacion?: number;
    public cveDelegacion?: number;
    public numOficioDerivacion?: number;

    public mensajeAbogado?:number;
    public mensajeConciliacion?:number;
    public mensajeFinado?:number;
    public mensajeReclamo?:number;
    public mensajeActor?:number;  
    public mensajeDerivacion?:number;
    public agregarActorInterface?:number;
    public agregarFinadoInterface?:number;
    
    public documento?:DocumentoDigitalizado
}


export class claseActor{

    public ActorTipo?:string;
    public ActorAfiliacion?:string;
    public ActorMatricula?:string;
    public ActorRFC?:string;
    public ActorCurp?:string;
    public ActorNombre?:string;
    public ActorApePaterno?:string;
    public ActorApeMaterno?:string;
    public ActorUMF?:string;
    public ActorGenero?:string;

}

export class folioDerivacionResponse {

    public id?:number;
    public numAnioDerivacion?:number;
    public cveDelegacion?:number;
    public numOficioDerivacion?:number;
    public indImpresionOficio?:number;
    public refComentario?:string;
    public fecRecepcion?:string;
    public status?:number;
    public message?:string;
}

