import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 8500
        }
      ];
    
    get personajes(): Personaje[]{
    // Para no pasar por feferencia
        return [...this._personajes];
    }

    constructor(){
        console.log("Servicio inicializado");
    }

    AgregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
   
}