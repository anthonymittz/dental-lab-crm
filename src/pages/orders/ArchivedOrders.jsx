import { orderArchived } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function ArchivedOrders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { orderArchived }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default ArchivedOrders;