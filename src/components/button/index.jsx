import "./index.css";

export const Button = (
  children,
  onClick,
  className,
  type = "button",
  disabled,
  isLoading
) => (
  <button
    type={type}
    onClick={onClick}
    className={`buttonComponent ${className}`}
    disabled={disabled}
    ref={ref}
  >
    {isLoading ? "Loading..." : children}
  </button>
);

export default Button;
