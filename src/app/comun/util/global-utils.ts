import { NAV } from '../config/global';
import { ROLE } from './../helper/role.helper';
export class GlobalUtlils{

  public static scrollTo(id_elemento: string){
    const element = document.querySelector(`#${id_elemento}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'end'});
  }

  public static sumaProperty(arreglo: Array<any>, property: string): number{
    if(arreglo){
      return arreglo
    .map(item => item[property])
    .reduce((prev, curr) => prev + curr, 0);
    }
    return 0;
  }

  public static cadenaAJSON(strJson: string): any{
    if(strJson){
      try{
        const json = JSON.parse(strJson);
        return json;
      }catch{
        return null;
      }
    }
    return null;
  }

  public static isRolValidoMai(rol: string){
    const rolesMai = [ROLE.ABOGADO,ROLE.CLON_ABOGADO,ROLE.CLON_DE_COORDINADOR,ROLE.JEFE_DE_SERVICIOS_JURIDICOS,ROLE.JEFE_DE_DEPARTAMENTO,ROLE.COORDINADOR];
    return rolesMai.includes(rol.toUpperCase());
  }

  public static isRutaValidaMai(rol: string, ruta: string){
    if(rol.toUpperCase()===ROLE.ABOGADO && ruta === NAV.registroNotificacionAmparoIndirecto){
      return true;
    }
    return false;
  }

  public static soloTexto(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zñA-ZÑ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public static textoAlfanumerico(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zñA-ZÑ0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public static soloNumeros(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public static correo(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zñA-ZÑ0-9@_.\- ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public static oficio(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zñA-ZÑ0-9_.\-\\/\$#&%]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public static cadenaAFecha(fechaMX: string): Date{
    const parts = fechaMX.split('/');
    const fecha = new Date(+parts[2], +parts[1] - 1, +parts[0]);
    console.log('mi fecha', fecha.toDateString());
    return fecha;
  }

  public static cadenaAFechaUS(fechaUS: string): Date{
    const parts = fechaUS.split('-');
    const fecha = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    console.log('mi fecha', fecha.toDateString());
    return fecha;
  }

  public static cadenaAFechaSeparador(fechaMX: string, caracterSeparador: string): Date{
    const parts = fechaMX.split(caracterSeparador);
    const fecha = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    console.log('mi fecha', fecha.toDateString());
    return fecha;
  }

  public static agregaDiasFecha(fecha:string, dias:number):string{
    const fechaObj = GlobalUtlils.cadenaAFechaUS(fecha);
    fechaObj.setDate(fechaObj.getDate() + dias)
    return fechaObj.toISOString().slice(0, 10);
}
}
