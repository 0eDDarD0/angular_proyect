import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-foot-options',
  templateUrl: './foot-options.component.html',
  styleUrls: ['./foot-options.component.css']
})
export class FootOptionsComponent implements OnInit {

    ////////////////////// DATOS
    servicio: ServicioService;
    busqueda = "";

    constructor(s: ServicioService){
        this.servicio = s;
    }

    ngOnInit(): void {
    }


    ////////////////////// METODOS
    cambioModo(m: string){
        if(m == 'busqueda')
            this.servicio.busqueda = this.busqueda;
        this.servicio.modo = m;
    }

    limpiar(){
        this.servicio.notas = this.servicio.notas.filter(function(nota){
            return !nota.done;
        });

        this.servicio.save();
    }


    ////////////////////// CALCULADOS
    recuentoTotal(){
        return this.servicio.notas.length;
    }
    recuentoHechas(){
        let num_pendientes = 0;
        for(let i = 0 ; i < this.servicio.notas.length ; i++){
            if(this.servicio.notas[i].done)
                num_pendientes++;
        }
        return num_pendientes;
    }

}
