import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app-state";

import {decrement, increment} from "./counter.actions";

@Component({
  selector: '[counter]',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
	counter$; // variable$ mean that is a observable

	constructor(private store: Store<AppState>){
		/*this.counter$ = store.select("counter");*/
		this.counter$ = this.store.select((state) => {
			return state.counter.data;
		})
	}

	increment() {
		this.store.dispatch(increment());
	}

	decrement() {
		this.store.dispatch(decrement());
	}
}
