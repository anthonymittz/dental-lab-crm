import { inventoryTools } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Tools({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { inventoryTools }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Tools;