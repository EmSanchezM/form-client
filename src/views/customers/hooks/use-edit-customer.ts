import { useReducer } from 'react';

import {
	createCustomerFormReducer,
	State
} from '../reducers/create-customer.reducer';
import { Customer } from '../../../lib/models';

export const getEditFormInitialState = (customer: Customer) => ({
	firstName: {
		value: customer.firstName,
		error: undefined
	},
	lastName: {
		value: customer.lastName,
		error: undefined
	},
	birthday: {
		value: customer.birthday,
		error: undefined
	},
	gender: {
		value: customer.gender,
		error: undefined
	},
	cellphone: {
		value: customer.cellphone,
		error: undefined
	},
	homephone: {
		value: customer.homephone,
		error: undefined
	},
	addressHome: {
		value: customer.addressHome,
		error: undefined
	},
	profession: {
		value: customer.profession,
		error: undefined
	},
	incomes: {
		value: `${customer.incomes}`,
		error: undefined
	}
});

export const useUpdateForm = (currentCustomer: Customer) => {
	const [formValues, dispatchFormValues] = useReducer(
		createCustomerFormReducer,
		getEditFormInitialState(currentCustomer)
	);

	const isFormInvalid =
		areInitialValues(formValues, currentCustomer) ||
		!formValues.firstName.value ||
		formValues.firstName.error ||
		!formValues.lastName.value ||
		formValues.lastName.error ||
		!formValues.birthday.value ||
		formValues.birthday.error ||
		!formValues.gender.value ||
		formValues.gender.error ||
		!formValues.cellphone.value ||
		formValues.cellphone.error ||
		!formValues.homephone.value ||
		formValues.homephone.error ||
		!formValues.addressHome.value ||
		formValues.addressHome.error ||
		!formValues.profession.value ||
		formValues.profession.error ||
		!formValues.incomes.value ||
		formValues.incomes.error;

	return { ...formValues, dispatchFormValues, isFormInvalid };
};

const areInitialValues = (formValues: State, customer: Customer) =>
	formValues.firstName.value === customer.firstName &&
	formValues.lastName.value === customer.lastName;
