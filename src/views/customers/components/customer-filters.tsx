import { useState } from 'react';

import style from './customer-filters.module.css';

import { Button, Modal } from '../../../components/ui';
import CustomerCreateForm from './customer-create-form';

const CustomerListFilters = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={style.form}>
      <Modal closeModal={() => setShowModal(false)}>
        {showModal && <CustomerCreateForm closeModal={() => setShowModal(false)} />}
      </Modal>
      <div className={style.row}>
        <Button onClick={() => setShowModal(true)}>Añadir cliente</Button>
      </div>
    </section>
  );
};
export default CustomerListFilters;