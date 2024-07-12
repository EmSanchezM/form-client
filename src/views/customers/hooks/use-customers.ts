import { useEffect, useState } from "react";

import { Customer } from "../../../lib/models";
import { getAllCustomers } from "../../../lib/api/customers.api";
import { toastAlert } from "../../../lib/events/alert-events";

interface FetchCustomerState {
  data: Customer[];
  error: boolean;
  loading: boolean;
}

export const useCustomers = () => {
  const [customers, setCustomers] = useState<FetchCustomerState>({
    data: [],
    error: false,
    loading: true,
  });

  const setData = (newData: Customer[]) =>
    setCustomers({ data: newData, loading: false, error: false });

  const setError = () =>
    setCustomers({ data: [], loading: false, error: true });

  useEffect(() => {
    const controller = new AbortController();

    loadCustomers(setData, setError, controller.signal);

    return () => controller.abort();
  }, []);

  return {
    customers: customers.data,
    customersError: customers.error,
    customersLoading: customers.loading,
  };
};

const loadCustomers = async (
  setData: (newData: Customer[]) => void,
  setError: () => void,
  signal: AbortSignal,
) => {
  const { customers, aborted } = await getAllCustomers(signal);

  if (aborted) return;
  if (customers) setData(customers);
  else {
    setError();
    toastAlert.error("Error al cargar clientes");
  }
};
