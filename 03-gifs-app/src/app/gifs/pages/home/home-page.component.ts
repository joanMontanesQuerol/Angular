import { Gifs } from '../../interfaces/gifs.interfaces';
import { GifsService } from './../../services/gifs.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'gifs-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}


  get gifs(): Gifs[]{
    return this.gifsService.gifList;
  }


}
