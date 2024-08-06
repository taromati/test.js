import React from 'react';

type ButtonProps = {
  color: 'red' | 'blue';
  children?: React.ReactNode | React.ReactNode[];
};

const Button = ({ color, children }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      onClick={() => console.log('click')}
    >
      {children}
    </button>
  );
};

export default Button;
