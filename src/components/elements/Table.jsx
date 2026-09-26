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
    <table className={a.container}>
      <div className="flex">Header</div>
      <div className="flex">Table</div>
    </table>
  );
}

const appearance = {
  container: "h-full flex flex-col gap-1"
};

export default Table;