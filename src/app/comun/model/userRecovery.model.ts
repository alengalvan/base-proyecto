
export const CONFIG_PARAMS = {
    resendEmailTimer: 1,
    conciliationPrefix: 2,
    validTokenTimer: 3
}

export class UserRecoveryBit {
    cveUsuario: string;
    refUsuario: string;
    refToken: string;
    refEmail: string;
    fecExpedicion: Date;
    fecCaducidad: Date;
    indEstatus: boolean;
}
