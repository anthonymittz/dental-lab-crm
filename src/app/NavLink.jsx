import { Link } from "react-router";
import { merge } from "@lib/merge";

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
  const a = merge(appearance, className);
  return (
    <Link className={a.container} to={to}>{ children }</Link>
  )
}

const appearance = {
  container: ""
};

export default NavLink;