import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = "joan montañés";
  public nameUpper: string = "JOAN MONTAÑÉS";
  public fullName: string = "jOan mONtaÑés";

  public customDate: Date = new Date();

}
