import { FC, InputHTMLAttributes } from 'react';
import style from './input-number.module.css';

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: string;
}

const InputNumber: FC<InputNumberProps> = ({ label, error, className, ...props }) => (
  <label className={className}>
    <span className={style.label}>{label}</span>
    <input
      {...props}
      className={`${style.input} ${error ? style.borderError : ''}`}
      type='number'
    ></input>
    {error && <span className={style.error}>{error}</span>}
  </label>
);

export default InputNumber;