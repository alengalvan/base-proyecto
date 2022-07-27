import { environment } from 'src/environments/environment';

export const API = {

  seguridad: {
    oauth: environment.apiNmlsscSeguridad + '/v1/oauth/token',
  },
  
  sscHome: environment.sscHome + '/inicio',
  sscLogin: environment.sscHome + '/login',

}
