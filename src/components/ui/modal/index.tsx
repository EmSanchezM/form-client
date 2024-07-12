import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import IconButton from '../buttons/icon-button';
import CrossIcon from '../../icons/cross.icon';
import style from './modal.module.css';

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    if (!children) return;

    document.body.classList.add(style.bodyOverflow);

    return () => {
      document.body.classList.remove(style.bodyOverflow);
    };
  }, [children]);

  if (!children) return null;

  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <IconButton
          className={style.close}
          icon={CrossIcon}
          filled
          onClick={closeModal}
        />
        {children}
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;