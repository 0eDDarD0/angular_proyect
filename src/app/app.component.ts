import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_proyect';
  variable = "variable dinamica!";
  h1 = "";

  manejoEvento(str:string){
      this.h1 = str;
  }
}
