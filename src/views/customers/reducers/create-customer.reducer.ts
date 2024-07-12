import { CREATE_FORM_ACTIONS } from '../../../lib/constants/create-form-action.constant';
import {
	validateAddress,
	validateFirstName,
	validateIncomes,
	validateLastName,
	validatePhoneNumber
} from '../../../lib/validations/customers.validation';

export type State = {
	firstName: {
		value: string;
		error: string | undefined;
	};
	lastName: {
		value: string;
		error: string | undefined;
	};
	birthday: {
		value: string;
		error: string | undefined;
	};
	gender: {
		value: string;
		error: string | undefined;
	};
	cellphone: {
		value: string;
		error: string | undefined;
	};
	homephone: {
		value: string;
		error: string | undefined;
	};
	addressHome: {
		value: string;
		error: string | undefined;
	};
	profession: {
		value: string;
		error: string | undefined;
	};
	incomes: {
		value: string;
		error: string | undefined;
	};
};

type Action = { type: string; payload: string };

export const CREATE_FORM_INITIAL_STATE = {
	firstName: {
		value: '',
		error: undefined
	},
	lastName: {
		value: '',
		error: undefined
	},
	birthday: {
		value: '',
		error: undefined
	},
	gender: {
		value: '',
		error: undefined
	},
	cellphone: {
		value: '',
		error: undefined
	},
	homephone: {
		value: '',
		error: undefined
	},
	addressHome: {
		value: '',
		error: undefined
	},
	profession: {
		value: '',
		error: undefined
	},
	incomes: {
		value: '',
		error: undefined
	}
};

export const createCustomerFormReducer = (
	state: State,
	{ type, payload }: Action
) => {
	switch (type) {
		case CREATE_FORM_ACTIONS.FIRST_NAME: {
			const error = validateFirstName(payload);

			return {
				...state,
				firstName: { value: payload, error }
			};
		}
		case CREATE_FORM_ACTIONS.LAST_NAME: {
			const error = validateLastName(payload);

			return {
				...state,
				lastName: { value: payload, error }
			};
		}
		case CREATE_FORM_ACTIONS.BIRTHDAY: {
			return {
				...state,
				birthday: { value: payload, error: undefined }
			};
		}
		case CREATE_FORM_ACTIONS.GENDER: {
			return {
				...state,
				gender: { value: payload, error: undefined }
			};
		}
		case CREATE_FORM_ACTIONS.CELLPHONE: {
			const error = validatePhoneNumber(payload);

			return {
				...state,
				cellphone: { value: payload, error }
			};
		}
		case CREATE_FORM_ACTIONS.HOMEPHONE: {
			const error = validatePhoneNumber(payload);

			return {
				...state,
				homephone: { value: payload, error }
			};
		}
		case CREATE_FORM_ACTIONS.ADDRESS_HOME: {
			const error = validateAddress(payload);

			return {
				...state,
				addressHome: { value: payload, error }
			};
		}
		case CREATE_FORM_ACTIONS.PROFESSION: {
			return {
				...state,
				profession: { value: payload, error: undefined }
			};
		}
		case CREATE_FORM_ACTIONS.INCOMES: {
			const error = validateIncomes(payload);

			return {
				...state,
				incomes: { value: payload, error }
			};
		}
		default:
			throw new Error('Invalid action type');
	}
};
