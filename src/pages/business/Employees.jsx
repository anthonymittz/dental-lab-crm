import { businessEmployees } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Employees({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { businessEmployees }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Employees;