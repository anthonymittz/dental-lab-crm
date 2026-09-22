import { merge } from "@lib/merge";

function Deliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Deliveries
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Deliveries 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Deliveries;