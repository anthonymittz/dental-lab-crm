import { businessOverview } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewBusiness({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { businessOverview }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewBusiness;