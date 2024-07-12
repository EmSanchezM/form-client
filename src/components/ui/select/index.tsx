import React, { FC, ReactNode, InputHTMLAttributes } from 'react';

import ArrowDownIcon from '../../icons/arrow-down.icon';
import style from './select.module.css';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Select: FC<SelectProps> = ({ className, ...props }) => (
  <div className={`${style.wrapper} ${className || ''}`}>
    <select {...props} className={style.select}></select>
    <ArrowDownIcon className={style.arrow} />
  </div>
);

export default Select;