import { createContext } from 'react';

interface CustomerContext {
	onSuccess: () => void;
}

export const CustomerFormsContext = createContext<CustomerContext | undefined>(
	undefined
);
