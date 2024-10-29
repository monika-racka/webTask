import "./index.css";

export const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled,
  isLoading,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`buttonComponent ${className}`} // package `classnames` can be used here for cleaner and more readable conditional class handling
    disabled={disabled}
  >
    {isLoading ? "Loading..." : children}
  </button>
);

export default Button;
