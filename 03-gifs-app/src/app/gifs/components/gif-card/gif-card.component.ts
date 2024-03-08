import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-gif-card',
    templateUrl: './gif-card.component.html',
    styleUrl: './gif-card.component.css',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class GifCardComponent implements OnInit{
  @Input()
  public gif!: Gifs;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
  }

}
