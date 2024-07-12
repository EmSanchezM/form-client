import { CREATE_FORM_ACTIONS } from '../../../lib/constants/create-form-action.constant';

export const nameChanged = (firstName: string) => ({
	type: CREATE_FORM_ACTIONS.FIRST_NAME,
	payload: firstName
});

export const lastNameChanged = (lastName: string) => ({
	type: CREATE_FORM_ACTIONS.LAST_NAME,
	payload: lastName
});

export const birthdayChanged = (birthday: string) => ({
	type: CREATE_FORM_ACTIONS.BIRTHDAY,
	payload: birthday
});

export const genderChanged = (gender: string) => ({
	type: CREATE_FORM_ACTIONS.GENDER,
	payload: gender
});

export const cellphoneChanged = (cellphone: string) => ({
	type: CREATE_FORM_ACTIONS.CELLPHONE,
	payload: cellphone
});

export const homephoneChanged = (homephone: string) => ({
	type: CREATE_FORM_ACTIONS.HOMEPHONE,
	payload: homephone
});

export const professionChanged = (profession: string) => ({
	type: CREATE_FORM_ACTIONS.PROFESSION,
	payload: profession
});

export const addressHomeChanged = (addressHome: string) => ({
	type: CREATE_FORM_ACTIONS.ADDRESS_HOME,
	payload: addressHome
});

export const incomesChanged = (incomes: string) => ({
	type: CREATE_FORM_ACTIONS.INCOMES,
	payload: incomes
});
