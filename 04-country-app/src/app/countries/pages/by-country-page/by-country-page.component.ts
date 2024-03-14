import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServise: CountriesService){}

  searchByCapital(term: string):void{
      this.countriesServise.searchCapital(term, "name")
      .subscribe( countries => {
        this.countries = countries;
      });

  }
}
