import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    ////////////////////// DATOS
    servicio: ServicioService;
    mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    constructor(s: ServicioService){
        this.servicio = s;
    }


    ////////////////////// METODOS
    //FUNCION QUE CREA UNA NOTA NUEVA
    crearNota(){
        let d = new Date()
        this.servicio.notas.push({id: this.servicio.id, 
                                titulo: this.servicio.titulo, 
                                descripcion: this.servicio.descripcion, 
                                done: false,
                                prioridad: this.servicio.prioridad,
                                fecha: d.getDate() + " - " + this.mes[d.getMonth()] + " - " + d.getFullYear(),
                                minutos : d.getTime()
                            });
        this.servicio.id++;
        this.servicio.save();

        this.servicio.titulo = "";
        this.servicio.descripcion = "";
    }

    //FUNCION QUE CAMBIA EL ESTADO DE UNA NOTA
    cambioEstado(id: number){
        let n = this.servicio.notas.filter(function(nota){
            return nota.id == id;
        });

        n[0].done = !n[0].done;

        this.servicio.save();
    }

    //FUNCION QUE BORRA UNA NOTA
    borrarNota(id: number){
        for(let i = 0 ; i < this.servicio.notas.length ; i++){
            if(this.servicio.notas[i].id == id)
                this.servicio.notas.splice(i, 1);
        }

        this.servicio.save();
    }

    //FUNCION QUE CAMBIA LA PRIORIDAD DE UNA NOTA
    cambioPrioridad(id: number, p: number){
        let n = this.servicio.notas.filter(function(nota){
            return nota.id == id;
        })[0];

        n.prioridad = p;

        this.servicio.save();
    }


    ////////////////////// CALCULADOS
    strPrioridad(p: number){
        if(p == 1){
            return "Alta";
        }else if(p == 2){
            return "Media";
        }else{
            return "Baja";
        }
    }
    strEstado(id: number){
        let n = this.servicio.notas.filter(function(nota){
            return nota.id == id;
        })[0];

        if(n.done){
            return "Completada";
        }else{
            return "Pendiente";
        }
    }
    strMinutos(m: number){
        let d = new Date();
        return Math.trunc((d.getTime() - m) / 60000);
    }

    filtro(){
        let nuevo = [];
        //SEGUN EL MODO RECOGERA CIERTAS NOTAS DEL ARRAY
        if(this.servicio.modo == 'pendiente'){
            nuevo = this.servicio.notas.filter(function(nota){
                return !nota.done;
            });
        }else if(this.servicio.modo == 'terminada'){
            nuevo = this.servicio.notas.filter(function(nota){
                return nota.done;
            });
        }else if(this.servicio.modo == 'busqueda'){
            for(let i = 0 ; i < this.servicio.notas.length ; i++){
                if(this.servicio.notas[i].titulo.includes(this.servicio.busqueda) || this.servicio.notas[i].descripcion.includes(this.servicio.busqueda))
                    nuevo.push(this.servicio.notas[i]);
            }
        }else{
            nuevo = this.servicio.notas;
        }
        //DEVUELVE EL ARRAY ORDENADO SEGUN PRIORIDAD
        return nuevo.sort((a, b)=>{
            return a.prioridad - b.prioridad;
        });
    }
}
