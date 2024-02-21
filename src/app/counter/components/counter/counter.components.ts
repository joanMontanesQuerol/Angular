import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ctn}}</h3>
    <button (click)="increseBy(1)" class="btn btn-primary mx-2">+1</button>
    <button (click)="resetCounter()" class="btn btn-primary">Reset</button>
    <button (click)="decreseBy(1)" class="btn btn-primary mx-2">-1</button>

  `
})

export class CounterComponent{
  public title: string = '02-bases';
  public ctn: number = 10;
  public ctnDefault = 10;

  increseBy(value:number):void{
    this.ctn += value;
  }

  decreseBy(value:number):void{
    this.ctn -= value;
  }

  resetCounter():void{
    this.ctn= this.ctnDefault;
  }
}
