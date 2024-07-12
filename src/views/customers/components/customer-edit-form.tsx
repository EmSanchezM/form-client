import { FC, FormEvent, useContext, useState } from 'react';
import style from './customer-create-form.module.css';

import { InputText, InputDate, Select, InputNumber, Button } from '../../../components/ui';

import { addressHomeChanged, birthdayChanged, cellphoneChanged, genderChanged, homephoneChanged, incomesChanged, lastNameChanged, nameChanged, professionChanged } from '../actions/create-form.action';

import { GENDERS } from '../../../lib/constants/gender.constants';
import { PROFESSIONS } from '../../../lib/constants/professions.constants';
import { Customer } from '../../../lib/models';
import { updateCustomer } from '../../../lib/api/customers.api';
import { toastAlert } from '../../../lib/events/alert-events';
import { useUpdateForm } from '../hooks/use-edit-customer';
import { CustomerFormsContext } from '../contexts/form-context';

interface CustomerUpdateFormProps {
  currentCustomer: Customer;
  closeModal: () => void;
}

const CustomerUpdateForm: FC<CustomerUpdateFormProps> = ({ currentCustomer, closeModal }) => {
  const context = useContext(CustomerFormsContext);

  if (!context) {
    throw new Error('CustomerDeleteForm debe ser usado dentro de un CustomerFormsContext.Provider');
  }

  const { onSuccess } = context

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleIsSubmitting = (isSubmitting: boolean) => setIsSubmitting(isSubmitting);
  const { isFormInvalid, firstName, lastName, birthday, gender, cellphone, homephone, profession, addressHome, incomes, dispatchFormValues } = useUpdateForm(currentCustomer);

  return (
    <form className={style.form} onSubmit={evt => handleSubmit(evt, currentCustomer.id, firstName, lastName, birthday, gender, cellphone, homephone, profession, addressHome, incomes, handleIsSubmitting, onSuccess, closeModal)}>
      <InputText
        label='Nombre'
        placeholder='John'
        error={firstName.error}
        value={firstName.value}
        onChange={ev => dispatchFormValues(nameChanged(ev.target.value))}
      />
      <InputText
        label='Apellido'
        placeholder='Doe'
        error={lastName.error}
        value={lastName.value}
        onChange={ev => dispatchFormValues(lastNameChanged(ev.target.value))}
      />
      <InputDate
        label='Fecha de nacimiento'
        error={birthday.error}
        value={birthday.value}
        onChange={ev => dispatchFormValues(birthdayChanged(ev.target.value))}
      />
      <InputText
        label='Telefono fijo'
        placeholder='2224-5254'
        error={homephone.error}
        value={homephone.value}
        onChange={ev => dispatchFormValues(homephoneChanged(ev.target.value))}
      />

      <InputText
        label='Telefono movil'
        placeholder='9514-5448'
        error={cellphone.error}
        value={cellphone.value}
        onChange={ev => dispatchFormValues(cellphoneChanged(ev.target.value))}
      />

      <Select name='gender' value={gender.value} onChange={ev => dispatchFormValues(genderChanged(ev.target.value))}>
        <option value={GENDERS.MALE}>Masculino</option>
        <option value={GENDERS.FEMALE}>Femenino</option>
        <option value={GENDERS.OTHER}>Otro</option>
      </Select>

      <Select name='profession' value={profession.value} onChange={ev => {
        console.log(ev.target.value)
        dispatchFormValues(professionChanged(ev.target.value))
      }}>
        {
          PROFESSIONS.map(profession => (
            <option key={profession.id} value={profession.value}>{profession.value}</option>
          ))
        }
      </Select>

      <InputText
        label='Dirección'
        placeholder='Francisco morazan, Tegucigalpa'
        error={addressHome.error}
        value={addressHome.value}
        onChange={ev => dispatchFormValues(addressHomeChanged(ev.target.value))}
      />

      <InputNumber
        label='Ingresos'
        placeholder='25400.50'
        error={incomes.error}
        value={incomes.value}
        onChange={ev => dispatchFormValues(incomesChanged(ev.target.value))}
      />
      <div className={style.row}>
        <Button
          type='button'
          kind='secondary'
          disabled={isSubmitting}
          onClick={closeModal}
        >
          {isSubmitting ? 'Cargando...' : 'Cancelar'}
        </Button>

        <Button type='submit' kind='primary' disabled={isSubmitting || isFormInvalid === true}>
          {isSubmitting ? 'Cargando...' : 'Editar cliente'}
        </Button>
      </div>

    </form>
  )
}

const handleSubmit = async (
  ev: FormEvent<HTMLFormElement>,
  customerId: string,
  firstName: { value: string, error: string | undefined },
  lastName: { value: string, error: string | undefined },
  birthday: { value: string, error: string | undefined },
  gender: { value: string, error: string | undefined },
  cellphone: { value: string, error: string | undefined },
  homephone: { value: string, error: string | undefined },
  profession: { value: string, error: string | undefined },
  addressHome: { value: string, error: string | undefined },
  incomes: { value: string, error: string | undefined },
  handleIsSubmitting: (isSubmitting: boolean) => void,
  onSuccess: () => void,
  closeModal: () => void
) => {
  ev.preventDefault();

  handleIsSubmitting(true);

  const customer: Customer = {
    id: customerId,
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
    gender: gender.value,
    cellphone: cellphone.value,
    homephone: homephone.value,
    profession: profession.value,
    addressHome: addressHome.value,
    incomes: +incomes.value,
  };

  const success = await updateCustomer(customerId, customer);

  if (success) {
    onSuccess();
    toastAlert.success('Cliente actualizado con éxito');
  } else {
    toastAlert.error('Error al actualizar cliente');
  }
  closeModal();
};

export default CustomerUpdateForm

