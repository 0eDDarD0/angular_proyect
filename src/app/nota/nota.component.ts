import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})

export class NotaComponent implements OnInit {

    //////////////////// INPUTS
    @Input() estatico = "";
    @Input() dinamico = "";
    
    //////////////////// OUTPUTS
    @Output() miEvento = new EventEmitter<string>();

    //////////////////// DATOS
    titulo = "Holappp";
    lista = [""];
    texto = "";

    constructor() { }

    ngOnInit(): void {
    }

    botonjaja(){
        this.lista.push(this.texto);

        this.miEvento.emit(this.texto);

        this.texto = "";
    }
}
