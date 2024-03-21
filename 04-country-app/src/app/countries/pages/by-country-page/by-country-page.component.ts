import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public searchTerm: string = '';

  public isLoading:boolean = false;

  constructor(private countriesServise: CountriesService){}

  ngOnInit(): void {
    this.searchTerm = this.countriesServise.cacheStorage.byCountries.term;
    this.countries = this.countriesServise.cacheStorage.byCountries.countries;
  }

  searchByCapital(term: string):void{

      this.isLoading = true;

      this.countriesServise.searchCountry(term, "name")
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });

  }
}
