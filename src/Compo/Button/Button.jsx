import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  size = "md",
  href,
  background = "",
  download,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none transition duration-300 ease-in-out";
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed";

  const buttonContent = (
    <button
      type={type}
      className={`${baseStyles} bg-${background}  ${sizeStyles[size]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );

  if (href) {
    return (
      <button
        type={type}
        className={`${baseStyles} bg-${background}  ${sizeStyles[size]} ${
          disabled ? disabledStyles : ""
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        <a href={href} download={download} {...props}>
          {label}
        </a>
      </button>
    );
  }

  return buttonContent;
};

export default Button;
