import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: 'searchBox.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter();

  emitValue(): void{
    this.onValue.emit(this.tagInput.nativeElement.value);
  }



}
