import { orderCurrent } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function CurrentOrders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { orderCurrent }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default CurrentOrders;