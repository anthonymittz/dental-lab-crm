import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<ReturnType<appearance>>
 *   type?: "primary"|"secondary"|"outline"|"flat"
 *   size?: "fit"|"sm"|"md"|"lg"
 *   disabled?: boolean
 *   children?: import("react").ReactNode
 *   onClick?: () => void
 * }} props
 */
function Button({
  className,
  type = 'primary', 
  size = 'md',
  disabled = false,
  children = null,
  onClick = () => {}
}) {
  const a = merge(appearance(disabled), className || {});
  const style = is(a.container, a[type], a[size]);
  return <button className={style} onClick={onClick}>{ children }</button>;
}

const appearance = disabled => ({
  container: is("rounded-sm", disabled || 'cursor-pointer'),
  primary: disabled 
    ? "bg-accent-700 text-accent-600" 
    : "bg-accent-500 text-c-900",
  secondary: disabled 
    ? "bg-c-300 text-c-400" 
    : "bg-c-300 text-c-900 hover:bg-c-400",
  outline: disabled 
    ? "border border-c-300 text-c-300" 
    : "text-c-900 border border-c-300 hover:border-c-400 hover:bg-c-300",
  flat: "bg-transparent transition-colors duration-100 hover:bg-c-400/20 active:bg-c-400/40",
  fit: "h-fit! w-fit!",
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-4",
});


export default Button;