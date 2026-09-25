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
      Table
    </div>
  );
}

const appearance = {
  container: "h-full "
};

export default Table;