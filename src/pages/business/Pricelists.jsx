import { businessPricelists } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Pricelists({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { businessPricelists }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Pricelists;