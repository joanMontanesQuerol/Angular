import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.components";

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule{}
