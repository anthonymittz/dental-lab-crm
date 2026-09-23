import { Link } from "react-router";
import { is, merge } from "@lib/merge";

/**
 * @param {{
 *   to: string
 *   children?: import("react").ReactNode
 *   className?: typeof appearance
 * }} props
 */
function NavLink({
  to,
  children = null,
  className = appearance,
  ...props
}) {
  return (
    <Link className={is(appearance, className)} to={to} {...props}>
      { children }
    </Link>
  );
}

/** @type {string} */
const appearance = "";

export default NavLink;