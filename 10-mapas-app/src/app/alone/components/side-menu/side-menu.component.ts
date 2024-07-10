import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem{
  name: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'maps-side-menu-component',
  templateUrl: './side-menu.component.html',
  imports: [CommonModule, RouterModule],
  styles: ``
})
export class SideMenuComponent {

  constructor(private router: Router){}


  public menuItems: MenuItem[] = [
    {route: '/maps/fullscreen', name: 'Full-Screen'},
    {route: '/maps/zoom-range', name: 'Zoom-Range'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Houses'},
    {route: '/alone', name: 'Alone Page'},
  ]

  onPageChange(){
  }

}
