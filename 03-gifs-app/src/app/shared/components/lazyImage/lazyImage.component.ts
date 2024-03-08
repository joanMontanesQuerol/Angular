import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-lazy-image',
    templateUrl: 'lazyImage.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url no proporcionat');
  }

  onLoad(){
    this.hasLoaded = true;
  }
}
