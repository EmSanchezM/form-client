import { useCustomers } from './hooks/use-customers';

import style from './customers-view.module.css';

import Alert from '../../components/alerts';
import CustomerRow from './components/customer-row';
import CustomerListFilters from './components/customer-filters';
import { CustomerFormsContext } from './contexts/form-context';
import { useReducer } from 'react';
import { FILTERS_INITIAL_STATE, filtersReducer } from './reducers/filters-customer.reducer';
import { reset } from './actions/filters.action';

const CustomersView = () => {
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    FILTERS_INITIAL_STATE
  );

  const { customers, customersError, customersLoading } = useCustomers(filters);

  if (customersError) return <span>Error</span>

  if (customersLoading) return <span>Cargando...</span>

  return (
    <section className={style.wrapper}>
      <h1 className={style.title}>Listado de clientes</h1>
      <Alert />
      <CustomerFormsContext.Provider value={{ onSuccess: () => dispatchFilters(reset()) }}>
        <CustomerListFilters />

        {customers.map(customer => {
          return <CustomerRow customer={customer} key={customer.id} />
        })}
      </CustomerFormsContext.Provider>
    </section>
  )
}

export default CustomersView