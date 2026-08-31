import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', onClick }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'bg-brand-red text-white hover:bg-brand-red-600',
        secondary: 'bg-brand-orange text-white hover:bg-brand-orange-600',
        tertiary: 'bg-brand-yellow text-gray-800 hover:bg-brand-yellow-600',
    };

    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} font-sans`}
        >
            {children}
        </button>
    );
};

export default Button;
