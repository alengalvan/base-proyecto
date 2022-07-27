export class Field {
    name?: string;
    columName?: string;
    filterColum?:string;
}

export interface TableField{
    field? : string,
    header? : string,
    order?: string;
    enabled? : boolean,
    filterColum?:string;
}
