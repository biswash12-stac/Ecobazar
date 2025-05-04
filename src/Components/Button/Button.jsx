import rightarr from "../../assets/images/rightarr.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({
  children = "shop now",
  className = '',
  variant = 'primary',
  disabled = false,
  onClick,
  size = '',
  showIcon = true,
  ...restProps
}) => {
  // Define base styles (without background color)
  const baseClasses = "text-center px-8 py-3 justify-center rounded-2xl mt-8 relative right-3 flex items-center sm:py-2 sm:px-4";
  
  // Define variant styles
  const variantClasses = {
    primary: "bg-emerald-500 text-white",
    secondary: 'bg-white text-emerald-500 ',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50'
  };
  const getArrowColor = () => {
    switch(variant) {
      case 'secondary':
        return "filter invert-[0.5] sepia-[1] hue-rotate-[110deg] saturate-[5] brightness-[0.9] "; // Makes it emerald green
      default:
        return ""; // Default is white, works for primary, success, danger
    }
  };
  // Define size styles
  const sizeClasses = {
    small: 'text-sm py-1 px-3',
    medium: 'py-2 px-8',
    large: 'text-lg py-3 px-6'
  };
  
  // Combine all styles
  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant] || variantClasses.primary} 
    ${sizeClasses[size] || sizeClasses.medium}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  return (
    <>
      <button 
        className={buttonClasses}
        {...restProps} 
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
      >
        {children}

        {showIcon &&(

          <motion.img
          src={rightarr}
          alt="right arrow"
          className={`ml-2 w-4 h-6 ${getArrowColor()}`}
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )
        }
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  showIcon: PropTypes.bool,
};

export default Button;