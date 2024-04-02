import { Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

import localeCa from '@angular/common/locales/ca';
import localeEu from '@angular/common/locales/eu';
import localeGl from '@angular/common/locales/gl';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCa);
registerLocaleData(localeEu);
registerLocaleData(localeGl);



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{
    provide: LOCALE_ID, useValue: 'ca'
  }]
})
export class AppComponent{
}
