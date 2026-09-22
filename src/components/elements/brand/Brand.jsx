import NavLink from "@/components/elements/navigation/NavLink.jsx";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Brand({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <NavLink to="/app/dashboard">
        Brand
      </NavLink>
    </div>
  );
}

const appearance = {
  container: ""
};

export default Brand;