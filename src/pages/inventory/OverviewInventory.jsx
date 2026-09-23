import { inventoryOverview } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewInventory({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { inventoryOverview }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewInventory;