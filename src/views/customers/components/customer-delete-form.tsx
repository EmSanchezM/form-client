import { FC, FormEvent, useContext, useState } from 'react';

import { Customer } from '../../../lib/models';
import { Button } from '../../../components/ui';
import { deleteCustomerById } from '../../../lib/api/customers.api';
import { toastAlert } from '../../../lib/events/alert-events';

import style from './customer-delete-form.module.css';
import { CustomerFormsContext } from '../contexts/form-context';

interface CustomerDeleteFormProps {
  currentCustomer: Customer;
  closeModal: () => void;
}

const CustomerDeleteForm: FC<CustomerDeleteFormProps> = ({ currentCustomer, closeModal }) => {
  const context = useContext(CustomerFormsContext);

  if (!context) {
    throw new Error('CustomerDeleteForm debe ser usado dentro de un CustomerFormsContext.Provider');
  }

  const { onSuccess } = context

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleIsSubmitting = (isSubmitting: boolean) => setIsSubmitting(isSubmitting);

  return (
    <form
      className={style.form}
      onSubmit={ev =>
        handleSubmit(ev, currentCustomer.id, handleIsSubmitting, onSuccess, closeModal)
      }
    >
      <p>
        ¿Estás seguro de que quieres eliminar al cliente {'"'}
        {`${currentCustomer.firstName} ${currentCustomer.lastName}`}
        {'"'}?
      </p>
      <Button
        type='button'
        kind='secondary'
        disabled={isSubmitting}
        onClick={closeModal}
      >
        {isSubmitting ? 'Cargando...' : 'Cancelar'}
      </Button>
      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Cargando...' : 'Eliminar cliente'}
      </Button>
    </form>
  );
};

const handleSubmit = async (
  ev: FormEvent<HTMLFormElement>,
  customerId: string,
  handleIsSubmitting: (isSubmitting: boolean) => void,
  onSuccess: () => void,
  closeModal: () => void
) => {
  ev.preventDefault();

  handleIsSubmitting(true);

  const success = await deleteCustomerById(customerId);

  if (success) {
    onSuccess();
    toastAlert.success('Cliente eliminado con éxito');
  } else {
    toastAlert.error('Error al eliminar al cliente');
  }
  closeModal();
};

export default CustomerDeleteForm;