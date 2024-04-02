import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return (args[0]) ? value.toUpperCase() : value.toLowerCase()
  }
}
