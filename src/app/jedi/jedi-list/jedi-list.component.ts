import { Component, Input } from '@angular/core';
import { AppState } from "../../app-state";
import { Store } from "@ngrx/store";

import {
	addJedi,
	removeJedi,
	clearJedis
} from "./jedi-list.actions";

@Component({
	selector: '[jedi-list]',
	templateUrl: './jedi-list.component.html',
	styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent {
	@Input() max;

	list$; // variable$ mean that is a observable

	counter = 0;
	newJedi: string = '';

	constructor(private store: Store<AppState>){
		this.list$ = store.select("jediList");
	}

	add () {
		const id = this.counter++;
		const name = this.newJedi;
		this.store.dispatch(addJedi(id, name));
		this.newJedi = '';
	}

	remove (id) {
		this.store.dispatch(removeJedi(id));
	}

	clear () {
		this.store.dispatch(clearJedis([]));
		this.counter = 0;
	}
}
