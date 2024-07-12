import { ReactNode, SVGProps } from 'react'

interface ArrowDownIconPros extends SVGProps<SVGSVGElement> {
  children?: ReactNode;
}

const ArrowDownIcon = (props: ArrowDownIconPros) => (
  <svg
    {...props}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M19 9l-7 7-7-7'
    ></path>
  </svg>
);

export default ArrowDownIcon;