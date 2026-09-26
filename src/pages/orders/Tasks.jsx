import { orderTasks } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Tasks({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { orderTasks }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Tasks;