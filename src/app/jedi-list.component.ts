import {Component, Input} from '@angular/core';
import { AppState } from "./app-state";
import { Store } from "@ngrx/store";

@Component({
	selector: 'app-jedi-list',
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
		this.store.dispatch({
			type:"ADD_JEDI",
			payload: { id, name }
		});
		this.newJedi = '';
	}

	remove (id) {
		this.store.dispatch({
			type: "REMOVE_JEDI",
			payload: { id }
		})
	}

	clear () {
		this.store.dispatch({
			type: "LOAD_JEDIS",
			payload: []
		});
		this.counter = 0;
	}
}
