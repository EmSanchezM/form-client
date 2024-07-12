import { useCustomers } from './hooks/use-customers';

import style from './customers-view.module.css';

import Alert from '../../components/alerts';

const CustomersView = () => {
  const { customers, customersError, customersLoading } = useCustomers();

  if (customersError) return <span>Error</span>

  if (customersLoading) return <span>Cargando...</span>

  return (
    <section className={style.wrapper}>
      <h1 className={style.title}>Customers view</h1>
      <Alert />
      <pre>
        {JSON.stringify(customers, null, 2)}
      </pre>
    </section>
  )
}

export default CustomersView