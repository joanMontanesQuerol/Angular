import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  public countries: SmallCountry[] = [];

  public borders: SmallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    ){}


  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[]{
    return this.countriesService.regions;
  }

  onRegionChange(){
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(()=>this.myForm.get('country')!.setValue('')),
      switchMap(region => this.countriesService.getCountriesByRegion(region))
    )
    .subscribe(countries => {
      this.countries = countries;
    })
  }

  onCountryChange(){
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(()=>this.myForm.get('borders')!.setValue('')),
      tap(()=>this.borders = [])
    )
    .subscribe(country => {
      // this.borders = this.countries.find(o => o.name === country)?.borders.sort((a, b) => a.localeCompare(b));

      let bordersCodes = this.countries.find(o => o.name === country)?.borders;
      if(bordersCodes == undefined) return;
      this.countriesService.getCountryBordersByCodes(bordersCodes)
        .subscribe(borders => {
          this.borders = borders;
        })
    })
  }

  // onCountryChange(): void {
  //   this.myForm.get('country')!.valueChanges
  //   .pipe(
  //     tap( () => this.myForm.get('border')!.setValue('') ),
  //     filter( (value: string) => value.length > 0 ),
  //     switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode) ),
  //     switchMap( (country) => this.countriesService.getCountryBordersByCodes( country.borders ) ),
  //   )
  //   .subscribe( countries => {
  //     this.borders = countries;
  //   });
  // }


}
