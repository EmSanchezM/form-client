import { useReducer } from 'react';

import {
	createCustomerFormReducer,
	CREATE_FORM_INITIAL_STATE
} from '../reducers/create-customer.reducer';

export const useCreateForm = () => {
	const [formValues, dispatchFormValues] = useReducer(
		createCustomerFormReducer,
		CREATE_FORM_INITIAL_STATE
	);

	const isFormInvalid =
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
