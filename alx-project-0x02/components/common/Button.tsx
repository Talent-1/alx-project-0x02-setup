import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  size, 
  shape, 
  children, 
  onClick, 
  type = "button" 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`btn-${size} btn-${shape}`}
    >
      {children}
    </button>
  );
};

export default Button;
