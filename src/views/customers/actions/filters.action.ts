export const FILTERS_ACTIONS = {
	SEARCH: 'search_changed',
	RESET: 'reset'
};

export const reset = () => ({
	type: FILTERS_ACTIONS.RESET,
	payload: ''
});
