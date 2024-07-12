import { FILTERS_ACTIONS } from '../actions/filters.action';

type State = { search: string };
type Action = { type: string; payload: string };

export const FILTERS_INITIAL_STATE = {
	search: ''
};

export const filtersReducer = (state: State, action: Action) => {
	switch (action.type) {
		case FILTERS_ACTIONS.SEARCH:
			return {
				...state,
				search: action.payload
			};
		case FILTERS_ACTIONS.RESET:
			return { ...FILTERS_INITIAL_STATE };
		default:
			throw new Error('Invalid action type');
	}
};
