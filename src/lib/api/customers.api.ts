import { Customer } from '../models';

export const createCustomer = async (customer: Customer) => {
	try {
		const res = await fetch('http://localhost:4000/customers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(customer)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const updateCustomer = async (
	customerId: string,
	customer: Partial<Customer>
) => {
	try {
		const res = await fetch(`http://localhost:4000/customers/${customerId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(customer)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const deleteCustomerById = async (customerId: string) => {
	try {
		const res = await fetch(`http://localhost:4000/customers/${customerId}`, {
			method: 'DELETE'
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const getAllCustomers = async (signal: AbortSignal) => {
	try {
		const res = await fetch('http://localhost:4000/customers', { signal });

		let customers: Customer[] | undefined;

		if (res.ok) customers = await res.json();

		return {
			customers,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const isAborted = (err as Error).name === 'AbortError';

		return {
			customers: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
