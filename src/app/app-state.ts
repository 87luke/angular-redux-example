import {Jedi} from "./jedi/jedi.model";
import {CounterState} from "./counter/counter.module";

export interface AppState {
	counter: CounterState,
	jediList: Array<Jedi>
}
