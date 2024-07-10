import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapasModule),
  },
  {
    path: 'alone',
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component').then(m => m.AlonePageComponent),
  },
  {
    path: '**',
    redirectTo: 'maps',
  }
];
