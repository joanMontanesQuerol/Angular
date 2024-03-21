import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public searchTerm: string = '';

  public isLoading:boolean = false;

  constructor(private countriesServise: CountriesService){}

  ngOnInit(): void {
    this.searchTerm = this.countriesServise.cacheStorage.byCapital.term;
    this.countries = this.countriesServise.cacheStorage.byCapital.countries;
  }

  searchByCapital(term: string):void{

      this.isLoading = true;

      this.countriesServise.searchCountry(term, "capital")
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });


  }
}
