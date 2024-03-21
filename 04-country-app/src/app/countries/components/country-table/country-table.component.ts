import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];


}
