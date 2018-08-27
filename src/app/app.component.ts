import { Component } from '@angular/core';
import { AppState } from "./app-state";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$; // variable$ mean that is a observable

  constructor(private store: Store<AppState>){
  	this.counter$ = store.select("counter");
  }

  increment() {
  	this.store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
	  this.store.dispatch({ type: "DECREMENT" });
  }

}
