

export class Experiencia {
    id? : number;
    nombre : string;
    descripcion : string;
    valor: number;
    img: string;


    constructor(nombre: string, descripcion:string, valor:number, img:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valor=valor;
        this.img=img;
    }
}

