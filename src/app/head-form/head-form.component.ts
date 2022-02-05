import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-head-form',
  templateUrl: './head-form.component.html',
  styleUrls: ['./head-form.component.css']
})
export class HeadFormComponent implements OnInit {

    ////////////////////// OUTPUTS
    @Output() crearNota = new EventEmitter();

    ////////////////////// DATOS
    titulo = "";
    descripcion = "";
    prioridad = 3;
    servicio: ServicioService;

    constructor(s: ServicioService){
        this.servicio = s;
    }

    ngOnInit(): void {
    }

    //FUNCION QUE CREA UNA NOTA
    create(){
        this.servicio.titulo = this.titulo;
        this.servicio.descripcion = this.descripcion;
        this.servicio.prioridad = this.prioridad;

        this.crearNota.emit();

        this.titulo = "";
        this.descripcion = "";
    }
}
