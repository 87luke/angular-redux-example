import {
	ADD_JEDI,
	REMOVE_JEDI,
	CLEAR_JEDIS
} from "./jedi-list.constants";

export const addJedi = (id, name) => ({
	type: ADD_JEDI,
	payload: { id, name }
});

export const removeJedi = (id) => ({
	type: REMOVE_JEDI,
	payload: { id }
});

export const clearJedis = (jedis) => ({
	type: CLEAR_JEDIS,
	payload: jedis
});
