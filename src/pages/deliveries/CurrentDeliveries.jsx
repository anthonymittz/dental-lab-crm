import { deliveriesCurrent } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function CurrentDeliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { deliveriesCurrent }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default CurrentDeliveries;