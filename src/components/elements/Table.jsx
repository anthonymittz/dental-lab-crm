import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Table({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className="flex">Header</div>
      <div className="flex">Table</div>
    </div>
  );
}

const appearance = {
  container: "h-full flex flex-col gap-1"
};

export default Table;