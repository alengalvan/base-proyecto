import { Delegacion } from "./catalogo.model";

export class UserLoginModel {
    id: string;
    correo: string;
    password: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    rol?: string[];
    delegacion?: Delegacion;
    accessToken: BearerModel;
    refreshToken: BearerModel;
    expires_in?: number;
    user_name: string;
    usuarioList?: any[];
}

class BearerModel {
    bearer: string;
    tiempo: number;
}

export class BearerList{
    cvePerfil?: number;
    cveUsuario?: number;
    desPerfil?: string;
}
