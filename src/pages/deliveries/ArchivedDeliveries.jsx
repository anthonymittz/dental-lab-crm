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
      Archived Deliveries
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default ArchivedDeliveries;