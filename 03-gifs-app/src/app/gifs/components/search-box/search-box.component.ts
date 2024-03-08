import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html',
    styleUrl: './search-box.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServise: GifsService){}

  searchTag(): void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServise.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }
}
