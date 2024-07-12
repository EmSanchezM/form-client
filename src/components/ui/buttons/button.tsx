import { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import style from './button.module.css';

const KIND_CLASSNAME = {
  primary: style.primary,
  secondary: style.secondary
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary';
  icon?: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ kind = 'primary', className, ...props }) => (
  <button
    {...props}
    className={`${style.button} ${KIND_CLASSNAME[kind]} ${className || ''}`}
  ></button>
);

export default Button;