import { businessWorkflows } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Workflows({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { businessWorkflows }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Workflows;