import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'urgent';
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, to, variant = 'primary', className = '', icon }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-wider transition-all duration-300 transform rounded-full hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gym-gradient text-white hover:shadow-[0_10px_20px_rgba(0,123,255,0.4)] focus:ring-brand-primary",
    secondary: "bg-white text-brand-primary hover:bg-gray-100 hover:shadow-lg focus:ring-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-primary focus:ring-white",
    urgent: "bg-brand-secondary text-white hover:shadow-[0_10px_20px_rgba(255,59,48,0.4)] focus:ring-brand-secondary"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;