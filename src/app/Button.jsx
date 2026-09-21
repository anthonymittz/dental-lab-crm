import { is, merge } from "@lib/merge";

/**
 * @param {{
 *   variant?: "primary"|"secondary"|"outline"
 *   size?: "lg"|"md"|"sm"|"fit"
 *   className?: typeof appearance
 *   children?: import("react").ReactNode|null,
 *   onClick?: () => void
 * }} props
 */
function Button({
  variant = "primary",
  size = "md",
  className = appearance,
  onClick = () => {},
  children = null
}) {
  const a = merge(className, appearance);
  const style = is(a.container, variant && a[variant], size && a[size]);
  return <button onClick={onClick} className={style}>{ children }</button>;
}

const appearance = {
  container: "rounded-sm",
  primary: "bg-primary-700 text-white",
  secondary: "",
  outline: "",
  lg: "px-4.75 py-2.25",
  md: "px-2.75 py-1.25",
  sm: "px-1.75 py-px",
  fit: "",
};

export default Button;