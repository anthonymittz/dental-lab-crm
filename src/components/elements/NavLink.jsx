import { NavLink as NavLinkElement } from "react-router";
import { is, merge } from "@lib/merge";

/**
 * @param {{
 *   to: string
 *   children?: import("react").ReactNode
 *   className?: Partial<typeof appearance>
 * }} props
 */
function NavLink({
  to,
  children = null,
  className = appearance,
  ...props
}) {
  const a = merge(appearance, className);

  return (
    <NavLinkElement className={({ isActive }) => is(a.container, isActive && a.active)} to={to} {...props}>
      { children }
    </NavLinkElement>
  );
}

const appearance = {
  container: "",
  active: ""
}; 




export default NavLink;