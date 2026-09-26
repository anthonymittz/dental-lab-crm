import { orderOverview } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewOrders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { orderOverview }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewOrders;