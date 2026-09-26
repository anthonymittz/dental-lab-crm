import { deliveriesPlanned } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function PlannedDeliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { deliveriesPlanned }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default PlannedDeliveries;