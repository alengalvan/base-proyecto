export class RecursoRevicionSentenciaPost {
    cveRecursoRevSentenciaAmparoIndirecto?: number;
    
    ssctDocumentoDigitalizadoAmparoIndirectoByCveDocRecRevSentenQuejoso: {
        cveDocDigAmparoIndirecto: number;
    }
    ssccSentidoSentenciaAmparoIndirectoByCveSentidoSentenciaImss: {
        cveSentidoSentenciaAmparoIndirecto: number;
    }
    
    ssccTribunalColegiadoByCveTribunalColegiadoImss: {
        cveTribunalColegiado: number;
    }

    ssccTribunalColegiadoByCveTribunalColegiadoQuejoso: {
        cveTribunalColegiado: number;
    } 

    ssctSentenciaAmparoIndirecto: {
        cveSentenciaAmparoIndirecto: number;
    }

    ssccSentidoSentenciaAmparoIndirectoByCveSentidoSentenciaQuejoso: {
        cveSentidoSentenciaAmparoIndirecto: number;
    }

    ssccPromoventeAmparoIndirecto: {
        cvePromovente: number;
    }

    ssctDocumentoDigitalizadoAmparoIndirectoByCveDocRecRevSentenImss: {
        cveDocDigAmparoIndirecto: number;
    }

    fecVencimientoImss: string;
    fecPresentacionImss: string;
    numOficioAcuerdoImss: string;
    fecNotificacionImss: string;
    numTocaFolioImss: number;
    numTocaAnioImss: number;
    numOficioAcuerdoQuejoso: string;
    fecNotificacionQuejoso: string;
    numTocaFolioQuejoso: number;
    numTocaAnioQuejoso: number;
    indPresentoRevAdhesivaOManif: boolean;
    fecAlta: string;
    fecBaja: string;
    fecModifica: string;
    cveUsuarioAlta: number;
    cveUsuarioBaja: number;
    cveUsuarioModifica: number;
}