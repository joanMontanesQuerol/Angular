import { Component } from '@angular/core';

interface MenuItem{
  title: string,
  route: string
}

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public reactiveMenu: MenuItem[] = [
    {title: 'Básicos', route: './reactive/basic'},
    {title: 'Dinámos', route: './reactive/dynamics'},
    {title: 'Switches', route: './reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    {title: 'Registro', route: './auth/register'},
  ]

}
