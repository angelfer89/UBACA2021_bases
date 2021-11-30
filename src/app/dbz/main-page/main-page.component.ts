import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {


  constructor(private dbzService: DbzService){

  }

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  
  nuevo : Personaje= {
    nombre: '',
    poder: 0
  };

}
