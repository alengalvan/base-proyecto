import { Asunto } from "./conciliacion.model";
import { Documento } from "./file.model";

export class Desahogo {
    Audiencia?: boolean;
    AudienciaDiferida?: boolean;
    Acuerdo?: boolean;
    MotivoDiferido?: number;
    FechaAudiencia?: string;
    HoraAudiencia?: string;
    Documento: Documento;
    cveDocumentoDigitalizado?: number;
    Multa?: boolean;
    Observaciones?: string;
    MotivoConvenio?: string;
    FechaPago?: string;
    ImporteEstimado?: number;
}

export class DesahogoSend{
    asunto: Asunto;
    asuntoAudiencia: AsuntoAudiencia;
}

export class AsuntoAudiencia{
    cveDocumentoDigitalizado?: number;
    cveMotivoDiferimiento?: number;
    fecNuevaAudiencia?: string;
    indAcuerdo?: number;
    indAudiencia?: number;
    indDiferidaAudiencia?: number;
    indPagoMulta?: number;
    refMotivosNoConvenio?: string;
    refObservaciones?: string;
}
export class MultaSend{
    asunto: Asunto;
    asuntoMulta: AsuntoMulta;
}

export class AsuntoMulta{
    impPagoMulta: number;
    fecPagoMulta: string;
    cveDocumentoDigitalizadoMul?: number;
    refPagoMultaObservacion?: string;
}
export class AudienciaFechaSend{
    asunto: Asunto;
    asuntoFechaAudiencia: AsuntoAudienciaFecha;
}

export class AsuntoAudienciaFecha{
    fecAudienciaPreliminar: string;
    cveDocumentoDigitalizadoAP?: number;
    refAudienciaPreliminarObservacion?: string;
}