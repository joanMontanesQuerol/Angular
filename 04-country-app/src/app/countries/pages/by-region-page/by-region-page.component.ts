import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions:Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;


  public isLoading:boolean = false;


  constructor(private countriesServise: CountriesService){}

  ngOnInit(): void {
    this.selectedRegion = this.countriesServise.cacheStorage.byRegion.region;
    this.countries = this.countriesServise.cacheStorage.byRegion.countries;
  }


  searchByRegion(term: Region):void{
      this.isLoading = true;
      this.selectedRegion = term;

      this.countriesServise.searchCountry(term, "region", term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
