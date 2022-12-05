import {HTMLAttributes} from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  color: 'blue' | 'green' | 'gray'
}

export const ComponentButton = ({color, className, children, ...props}: Props) => {
  const colorClass = {
    blue: 'btn-blue',
    green: 'btn-green',
    gray: 'btn-gray',
  }
  return <button className={`btn-custom ${className} ${colorClass[color]}`} {...props}>
    {children}
  </button>
}