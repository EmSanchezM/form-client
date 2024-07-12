import { FC } from 'react';

import CustomerActions from './customer-actions';
import { Customer } from '../../../lib/models';

import style from './customer-row.module.css';
import { GetFormatterForCurrency } from '../../../lib/helpers';

interface CustomerRowProps {
  customer: Customer;
}

const CustomerRow: FC<CustomerRowProps> = ({ customer }) => (
  <article className={style.wrapper}>
    <div className={style.name}>
      {`${customer.firstName} ${customer.lastName} (${customer.profession})`}
    </div>
    <div className={style.name}>
      {GetFormatterForCurrency('JMD').format(customer.incomes)}
    </div>
    <div className={style.name}>
      {`${customer.cellphone} / ${customer.homephone}`}
    </div>
    <div className={style.name}>
      {customer.addressHome}
    </div>
    <div className={style.action}>
      <CustomerActions customer={customer} />
    </div>
  </article>
);

export default CustomerRow;