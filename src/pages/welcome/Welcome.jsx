import NavLink from "@/components/elements/NavLink.jsx";
import { merge } from "@lib/merge";

function Welcome({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <span>Welcome</span>
      <NavLink to='/app'>Sign in</NavLink>
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Welcome 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Welcome;