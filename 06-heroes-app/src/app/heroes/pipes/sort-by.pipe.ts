import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], option: string): Hero[] {
    switch (option) {
      case 'byName':
        return heroes.sort((a, b) => a.alter_ego.localeCompare(b.alter_ego));
      case 'byPublisher':
        return heroes.sort((a, b) => a.publisher.localeCompare(b.publisher));
      case 'bySuperhero':
        return heroes.sort((a, b) => a.superhero.localeCompare(b.superhero));
      default:
        console.error('Opción no válida:', option);
        return heroes;
    }
  }
}
