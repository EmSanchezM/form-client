import { FC, ButtonHTMLAttributes, ComponentType } from 'react';
import style from './icon-button.module.css';

const CLASSNAMES = {
  black: {
    normal: style.black,
    filled: style.blackFilled
  },
  red: {
    normal: style.red,
    filled: style.redFilled
  }
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'black' | 'red';
  filled: boolean;
  icon: ComponentType<{ className?: string }>
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({
  kind = 'black',
  filled,
  icon: Icon,
  className,
  ...props
}) => {
  const classNames = CLASSNAMES[kind];
  const classNameKey = filled ? 'filled' : 'normal';
  const kindClassName = classNames[classNameKey];

  return (
    <button
      {...props}
      className={`${style.button} ${kindClassName} ${className}`}
    >
      <Icon className={style.icon}></Icon>
    </button>
  );
};

export default IconButton;