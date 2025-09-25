import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center uppercase tracking-[0.24em] font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5',
    secondary: 'bg-white/8 text-white border border-white/15 hover:border-white/35 hover:-translate-y-0.5',
    outline: 'border border-white/25 text-white hover:bg-white hover:text-black hover:-translate-y-0.5'
  } as const;
  
  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-sm md:text-base'
  } as const;
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
