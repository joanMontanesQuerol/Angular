import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { SearchOption } from '../interfaces/option.type';
import { Region } from '../interfaces/region.type';
import { stringify } from 'uuid';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  public cacheStorage: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private httpClient: HttpClient) {
     this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem("cacheStore", JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage(){
    if(localStorage.getItem("cacheStore")){
      this.cacheStorage = JSON.parse(localStorage.getItem("cacheStore")!);
    }
    else{
      console.log("cacheStore no existe");
    }
  }

  searchCountryByAlphaCode(code:string):  Observable<Country | null> {
    const url:string = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
              .pipe(
                map(countries => countries.length > 0 ? countries[0]: null),
                catchError(error => of(null)),
              );

  }

  searchCountry( term: string, option:SearchOption, region?:Region): Observable<Country[]>{
    const url:string = `${this.apiUrl}/${option}/${term}`;
    return this.getCountriesRequest(url).
           pipe(
            tap(countries => {
              switch (option) {
                case 'capital':
                  this.cacheStorage.byCapital.term = term;
                  this.cacheStorage.byCapital.countries = countries;
                break;
                case 'region':
                  this.cacheStorage.byRegion.region = region;
                  this.cacheStorage.byRegion.countries = countries;
                break;
                case 'name':
                  this.cacheStorage.byCountries.term = term;
                  this.cacheStorage.byCountries.countries = countries;
                break;
              };
              this.saveToLocalStorage();
            })
           )

  }

  getCountriesRequest(url: string){
    return this.httpClient.get<Country[]>(url)
              .pipe(
                catchError(error => of([]))
              );
  }

}
