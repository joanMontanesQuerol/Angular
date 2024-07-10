import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  // private baseUrl: string = "https://restcountries.com/v3.1/region/europe?fields=cca3,name,borders";
  private baseUrl: string = "https://restcountries.com/v3.1";

  private _regions: Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania];

  constructor(private http: HttpClient) { }

  get regions(): Region[]{
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]>{
    if(!region) return of([]);
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name,borders`).
    pipe(
      map(countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))),
      tap(countries => countries.sort((a, b) => a.name.localeCompare(b.name)))
    )

  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry>{
    if(!alphaCode) return of();
    return this.http.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`).
    pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    )
  }

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]>{
    if(!borders || borders.length === 0) return of();
    let countriesRequests: Observable<SmallCountry>[] = [];
    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest( countriesRequests );
  }



}
