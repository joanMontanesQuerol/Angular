import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{name: 'Personaje', number: 1}]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  emitOnDeleteCharacter(id:string){
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
