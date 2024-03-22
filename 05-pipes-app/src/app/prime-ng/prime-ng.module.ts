import { NgModule, OnInit } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';




@NgModule({
  exports:[
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ]
})
export class PrimeNgModule implements OnInit{

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
