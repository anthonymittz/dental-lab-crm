import { deliveriesOverview } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewDeliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { deliveriesOverview }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewDeliveries;