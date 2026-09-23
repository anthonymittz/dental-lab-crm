import NavLink from "@/components/elements/NavLink.jsx";
import { merge } from "@lib/merge";

function Fallback({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <h1>Not found</h1>
      <NavLink to='/'>Go back to the beginning...</NavLink>
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Fallback 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Fallback;