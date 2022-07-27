import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentoUploadDto } from '../model/documento-upload-dto';


@Injectable()
export class FileUtils {

static listaArchivos :  DocumentoUploadDto[];

    static getDto(fileName: string,fbuffer: any): DocumentoUploadDto {
        const d = new DocumentoUploadDto();
        d.sNombreDocumento = fileName;
        d.bFile = this.generaArregloDeBytes(fbuffer);
        return d;
    }

    static generaArregloDeBytes(buffer: any): number[] {
        let result: number[] = [];
        let uint8 = new Uint8Array(buffer);
        for (var i = 0; i < uint8.length; i++) {
            let x = uint8[i];
            result.push(x);
        }
        return result;
    }

}
