import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {name: ' ', number: 0};

  emitCharacter(): void{
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
  }
}
