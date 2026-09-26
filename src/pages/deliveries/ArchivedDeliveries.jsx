import { deliveriesArchived } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function ArchivedDeliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { deliveriesArchived }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default ArchivedDeliveries;