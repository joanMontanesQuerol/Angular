import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Joan';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'convidar-lo',
    female: 'convidar-la'
  }

  changeClient():void {
    if(this.name == 'Joan'){
      this.name = 'Sara';
      this.gender = 'female';
    }
    else{
      this.name = 'Joan';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenim ningun client esperant.',
    '=1': 'tenim un client esperant.',
    '=2': 'tenim 2 client esperant.',
    'other': 'tenim # client esperant.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })




}
