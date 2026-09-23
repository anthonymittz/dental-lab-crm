import { inventoryExpendables } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Expendables({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { inventoryExpendables }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Expendables;