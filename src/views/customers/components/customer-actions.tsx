import { FC, ReactElement, useState } from 'react';

import { Customer } from '../../../lib/models';
import { IconButton, Modal } from '../../../components/ui';
import { PencilIcon, TrashIcon, DotsIcon } from '../../../components/icons';

import { useDropdown } from '../../../lib/hooks/use-dropdown';
import CustomerDeleteForm from './customer-delete-form';
import CustomerUpdateForm from './customer-edit-form';

import style from './customer-actions.module.css';

interface CustomerActionsProps {
  customer: Customer;
}

const CustomerActions: FC<CustomerActionsProps> = ({ customer }) => {
  const {
    modalContent,
    closeModal,
    openEditModal,
    openDeleteModal
  } = useModal(customer);

  const { dropdownOpened, dropdownRef, openDropdown, closeDropdown } =
    useDropdown();

  return (
    <div className={style.wrapper}>
      <Modal closeModal={closeModal}>{modalContent}</Modal>
      <IconButton icon={DotsIcon} filled={false} onClick={() => openDropdown()} />
      {dropdownOpened && (
        <ul
          ref={dropdownRef}
          className={style.dropdown}
          onClick={closeDropdown}
        >
          <li onClick={openEditModal}>
            <PencilIcon />
            <span>Editar</span>
          </li>
          <li onClick={openDeleteModal}>
            <TrashIcon />
            <span>Eliminar</span>
          </li>
        </ul>
      )}
    </div>
  );
};

const useModal = (customer: Customer) => {
  const [modalContent, setModalContent] = useState<ReactElement | undefined>(undefined);

  const closeModal = () => setModalContent(undefined);

  const openEditModal = () =>
    setModalContent(
      <CustomerUpdateForm currentCustomer={customer} closeModal={closeModal} />
    );

  const openDeleteModal = () =>
    setModalContent(
      <CustomerDeleteForm currentCustomer={customer} closeModal={closeModal} />
    );

  return {
    modalContent,
    customer,
    closeModal,
    openEditModal,
    openDeleteModal
  };
};

export default CustomerActions;