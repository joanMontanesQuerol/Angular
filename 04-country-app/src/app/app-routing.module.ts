import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';



export const routes:Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contactPage',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
