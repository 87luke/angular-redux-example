import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { Action, ActionReducerMap, StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";

export interface CounterState {
	data: number
}

const reducers: ActionReducerMap<CounterState> =  {
	data: counterReducer
};

@NgModule({
  imports: [
    CommonModule,
	  StoreModule.forFeature<CounterState, Action>('counter', reducers)
  ],
  declarations: [CounterComponent],
	exports:[CounterComponent]
})
export class CounterModule { }
