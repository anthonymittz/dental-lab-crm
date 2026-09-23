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
      Current
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default CurrentOrders;