import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

    notas = new Array();
    id = this.notas.length;
    titulo = "";
    descripcion = "";
    prioridad = 1;
    modo = "todo";
    busqueda = "";

    constructor(){
        let stringify = localStorage.getItem('toodoo');
        if(stringify){
            //SI EXISTE UN LOCALSTORAGE LO RECOGE
            this.notas = JSON.parse(stringify);
            if(this.notas.length){
                //PARA INCIALIZAR EL CONTADOR DE IDS RECOGE LA NOTA CON ID MAS ALTA Y LE SUMA 1
                let aux = this.notas.sort((a, b)=>{
                    return b.id - a.id
                });
                this.id = aux[0].id + 1;
            }
        }else{
            this.notas = new Array;
            this.id = 0;
        }
    }

    save(){
        localStorage.setItem('toodoo' ,JSON.stringify(this.notas));
    }
}
