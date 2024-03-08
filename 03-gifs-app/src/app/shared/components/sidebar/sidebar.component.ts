import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class SidebarComponent {

  constructor(public gifsService: GifsService){}

  searchTag(tag: string): void{
    this.gifsService.searchTag(tag);
  }

  get tagHistory():string[]{
    return this.gifsService.tagHistory;
  }

  clearHistroy(): void{
    this.gifsService.clearLocalStorage();
  }
}
