import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';

  nombre2='Aplicacion: Brandon J. Castillo Vásquez';
  Nombres: string[];
  montrarNombres: boolean;

  constructor(){
this.Nombres=['Brandon','Jair'];
this.montrarNombres=true;
  }

  ocuverNombres(){
  this.montrarNombres=!this.montrarNombres;
}
nuevoNombre(newNombre){
  this.Nombres.push(newNombre.value);
  newNombre.value="";
  return false;
}
}
