import NavLink from "@/components/elements/NavLink.jsx";
import { is } from "@lib/merge";

/**
 * @param {{ 
 *   className?: appearance
 *   to?: string
 *   children?: import("react").ReactNode
 * }} props
 */
function Title({
  to,
  className = appearance,
  children = null
}) {
  return (
    <NavLink to={to||'/app'}>
      <h2 className={is(appearance, className)}>{children}</h2>
    </NavLink>
  );
}

/** @type {string} */
const appearance = "centered";

export default Title;