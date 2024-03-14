import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {


  @Input()
  public countries: Country[] = [];


}
