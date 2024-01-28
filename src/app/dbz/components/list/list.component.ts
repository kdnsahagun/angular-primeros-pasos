import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    // esto da igual cómo lo inicialice, no se usa en ningún sitio el valor inicial
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();
  // onDelete = Index value : number


  onDeleteCharacter(id?: string): void {
    // this.characterList.splice(i,1); // se podía hacer esto y no hacía falta emitir nada
    // pero así demostramos lo de emitir eventos
    this.onDelete.emit(id);
    console.log(id);
  }


}
