import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=[
    {id: uuid(), name: 'Personaje', number: 2},
    {id: uuid(),name: 'Personaje', number: 3},
    {id: uuid(),name: 'Personaje', number: 4},
  ];

  addCharacter(ch:Character):void{
      const newCharacter: Character = {id: uuid(), ...ch }

      this.characters.push(newCharacter);

  }

  deleteCharacter(id:string){
      this.characters = this.characters.filter(ch => ch.id !== id);
  }

}
