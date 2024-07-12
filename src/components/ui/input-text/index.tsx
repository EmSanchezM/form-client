import { FC, InputHTMLAttributes } from 'react';
import style from './input-text.module.css';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className: string;
  error?: string;
}

const InputText: FC<InputTextProps> = ({ label, error, className, ...props }) => (
  <label className={className}>
    <span className={style.label}>{label}</span>
    <input
      {...props}
      className={`${style.input} ${error ? style.borderError : ''}`}
      type='text'
    ></input>
    {error && <span className={style.error}>{error}</span>}
  </label>
);

export default InputText;