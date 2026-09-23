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
      Overview
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewOrders;