import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCountryByAlphaCode(code:string):  Observable<Country | null> {
    const url:string = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
              .pipe(
                map(countries => countries.length > 0 ? countries[0]: null),
                catchError(error => of(null)),
              );

  }
  searchCapital( term: string, option:string ): Observable<Country[]>{
    const url:string = `${this.apiUrl}/${option}/${term}`;
    let res = this.httpClient.get<Country[]>(url)
              .pipe(
                catchError(error => of([]))
              );

    return res;
  }

}
