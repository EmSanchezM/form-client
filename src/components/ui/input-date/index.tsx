import { FC, InputHTMLAttributes } from 'react';
import style from './input-date.module.css';

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: string;
}

const InputDate: FC<InputDateProps> = ({ label, error, className, ...props }) => (
  <label className={className}>
    <span className={style.label}>{label}</span>
    <input
      {...props}
      className={`${style.input} ${error ? style.borderError : ''}`}
      type='date'
    ></input>
    {error && <span className={style.error}>{error}</span>}
  </label>
);

export default InputDate;