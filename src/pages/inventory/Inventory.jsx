import { merge } from "@lib/merge";

function Inventory({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Inventory
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Inventory 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Inventory;