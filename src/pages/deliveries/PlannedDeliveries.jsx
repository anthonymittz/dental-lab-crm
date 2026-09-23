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
      Planned Deliveries
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default PlannedDeliveries;