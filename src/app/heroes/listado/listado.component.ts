import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';
  borrado: boolean = false;

  BorrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    this.borrado = true;
  }

}
