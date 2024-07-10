import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
  },
  {
    path: '**',
    redirectTo: 'country'
  },
];
